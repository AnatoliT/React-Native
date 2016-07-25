import React, { Component } from 'react';
import {
  Animated,
  StyleSheet,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS, 
  TabBarIOS, 
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions
} from 'react-native';
var windowSize = Dimensions.get('window');
import editRoute from './routes/EditLearningRoute';
import scheduleRoute from './routes/ScheduleRoute';
import ExploreRoute from './routes/ExploreRoute';
import Config from '../../config';


import Registration  from '../registration/RegistrationLocalStore';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

import NavigationBar from 'react-native-navbar';

const REQUEST_URL = Config.apiURL +'/api/user/log/';
//const UDID = DeviceInfo.getUniqueID();

class MyLearning extends Component {
	constructor(props) {
		super(props);
		var dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,			
		});
		this.state = {
			dataSource: dataSource,
			loaded: false,
			rcontent: "",
			marginTop: new Animated.Value(0),
		};
	}

	componentDidMount() {
		this.fetchLearnings();
	}

	fetchLearnings() {
        Registration.getRegisteredUser().then((user) => {
            var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID+ '&sublearn_id=' + this.props.sublearn_id;
            console.log('calling ... '+fetchUrl);
			
			//var fetchUrl = "http://128.199.200.254:3030/api/user/topic/communication?email=shishircc@gmail.com&secretToken=Jnvjs9Bdjnvksd&subtopic=x,y,z";
            fetch(fetchUrl)
                .then((response) => response.json())
                .then((responseData) => {
					console.log(responseData);
                    var myLearnings = [];
					
					for (let learning of responseData) {
						myLearnings.push(learning);
					}
					
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(myLearnings),
                        loaded: true,
					});
                })
                .done();
        });
	}

	logsave(){
		if(this.state.rcontent != ""){
			Registration.getRegisteredUser().then((user) => {
				console.log(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID+ '&rcontent=' + this.state.rcontent);
					
					fetch(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken), {
						method: "POST",
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							learning_id: this.props.learningID,
							sublearn_id: this.props.sublearn_id,
							rcontent: this.state.rcontent,
							email: user.email,
						})
					})
						.then((response) => response.json())
						.then((responseData) => {
							if (responseData.status == 200) {
								console.log(responseData.message);
								
								this.fetchLearnings();
							}
						})

			});
		}
	}

	renderLearning(learning) {
		
		return (
			<View style={styles.rowContainer}>
				<View style={styles.infoContainer}>
					
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{ learning.logdate }</Text>
						<Text style={styles.content}>{ learning.rcontent }</Text>
					</View>
					
				</View>
			</View>
			
		);
	}

	render() {
		const titleConfig = {
			title: 'Learning Log',
		};

		const leftButtonConfig = {
			title: '< Back',
			handler: () => this.props.navigator.pop()
		};

		var content;
		
		if (!this.state.loaded) {
			content = (
				<View style={styles.loadingContainer}>
					<ActivityIndicatorIOS size='large' />
					<Text>
						Loading Explore...
					</Text>
				</View>
			);
		}

		else {
			content = (
			    
				<ListView
					dataSource={this.state.dataSource}
					enableEmptySections = {true}
					renderRow={this.renderLearning.bind(this)}
					style={styles.listContainer}
				/>
			);
		}
		var self = this;
		return (
			<Animated.View style={{ flex: 1, marginBottom: this.state.marginTop}}>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig} />
					
					{content}	       
				<View style={styles.reviewbox}>
					<View style={styles.reviewinput}>
						<TextInput style={{flex:1, fontSize:16}} placeholder="Enter your learning here" placeholderTextColor="#bbb" 
							onChangeText={(text) => this.setState({rcontent:text})}
							onFocus={function(){
                                   Animated.timing(          // Uses easing functions
                                       self.state.marginTop,    // The value to drive
                                       {toValue: 220}            // Configuration
                                     ).start();                // Don't forget start!
                               }}
                               onBlur={
                                 function() {
                                                                     Animated.timing(          // Uses easing functions
                                       self.state.marginTop,    // The value to drive
                                       {toValue: 0}            // Configuration
                                     ).start();                // Don't forget start!

                                 }
                               }
							/>
						<TouchableOpacity onPress={() => this.logsave()}>
						<Text style={styles.reviewpost}>Post</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Animated.View>
			
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightContainer: {
		flex: 1,
		marginLeft: 0,
	},
	forward: {
		alignSelf: 'center',
	},
	forwardContainer: {
		justifyContent: 'center',
	},
	infoContainer: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		flexDirection: 'row',
		flex: 1,
		padding: 5,
	},
	title: {
		fontSize: 18,
		color : 'black'
	},
	content: {
		fontSize: 16,
		color : '#444',
		marginLeft: 10
	},
	verbose: {
		marginTop: 10,
		flexDirection:'row',
	},
	reviewbox: {
		height : 80,
		backgroundColor : 'white',
		paddingTop:40
	},
	reviewinput: {
		flexDirection:'row', 
		height:35, 
		paddingLeft:20, 
		marginRight:15,
		backgroundColor:'#fff', 
		justifyContent:'center', 
		alignItems:'center'
	},
	reviewpost: {
		color:'#59a2e7', 
		fontSize:16, 
		marginLeft:10
	}
	
	
});

module.exports = MyLearning;