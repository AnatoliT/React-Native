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

const REQUEST_URL = Config.apiURL +'/api/user/review/';
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
			s1 : "star-o",
			s2 : "star-o",
			s3 : "star-o",
			s4 : "star-o",
			s5 : "star-o",
			mark : 0,
			marginTop: new Animated.Value(0),
		};
	}

	componentDidMount() {
		this.fetchLearnings();
	}

	fetchLearnings() {
        Registration.getRegisteredUser().then((user) => {
            var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID;
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

	setVal(id) {
		if(id == 1){
			if(this.state.s1=="star-o") {this.setState({s1:"star", mark:1});}
			else{this.setState({s1:"star-o", s2:"star-o", s3:"star-o", s4:"star-o", s5:"star-o", mark:0});}
		}
		if(id == 2){
			if(this.state.s2=="star-o") {this.setState({s1:"star", s2:"star", mark:2});}
			else{this.setState({s2:"star-o", s3:"star-o", s4:"star-o", s5:"star-o", mark:1});}
		}
		if(id == 3){
			if(this.state.s3=="star-o") {this.setState({s1:"star", s2:"star", s3:"star", mark:3});}
			else{this.setState({s3:"star-o", s4:"star-o", s5:"star-o", mark:2});}
		}
		if(id == 4){
			if(this.state.s4=="star-o") {this.setState({s1:"star", s2:"star", s3:"star", s4:"star", mark:4});}
			else{this.setState({s4:"star-o", s5:"star-o", mark:3});}
		}
		if(id == 5){
			if(this.state.s5=="star-o") {this.setState({s1:"star", s2:"star", s3:"star", s4:"star", s5:"star", mark:5});}
			else{this.setState({s5:"star-o", mark:4});}
		}
	}
	
	reviewsave(){
		if(this.state.rcontent != ""){
			Registration.getRegisteredUser().then((user) => {
				console.log(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID+ '&rcontent=' + this.state.rcontent);
					
					fetch(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID+ '&rcontent=' + this.state.rcontent, {
						method: "POST",
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							learning_id: this.props.learningID,
							rcontent: this.state.rcontent,
							email: user.email,
							mark: this.state.mark,
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
		var s1, s2, s3, s4, s5;
		if(learning.mark == 0){s1="star-o"; s2="star-o"; s3="star-o"; s4="star-o"; s5="star-o";}
		if(learning.mark == 1){s1="star"; s2="star-o"; s3="star-o"; s4="star-o"; s5="star-o";}
		if(learning.mark == 2){s1="star"; s2="star"; s3="star-o"; s4="star-o"; s5="star-o";}
		if(learning.mark == 3){s1="star"; s2="star"; s3="star"; s4="star-o"; s5="star-o";}
		if(learning.mark == 4){s1="star"; s2="star"; s3="star"; s4="star"; s5="star-o";}
		if(learning.mark == 5){s1="star"; s2="star"; s3="star"; s4="star"; s5="star";}
		
		return (
			<View style={styles.rowContainer}>
				<View style={styles.infoContainer}>
					
					<View style={styles.rightContainer}>
													
						<View style={styles.verbose}>
							<Icon name={s1} size={30} color="red" />
							<Icon name={s2} size={30} color="red" />
							<Icon name={s3} size={30} color="red" />
							<Icon name={s4} size={30} color="red" />
							<Icon name={s5} size={30} color="red" />
						</View>	
						
						<Text style={styles.title}>{ learning.rcontent }</Text>
						
					</View>
					
				</View>
			</View>
			
		);
	}

	render() {
		const titleConfig = {
			title: 'Review',
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
					<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:10}}>
						<TouchableOpacity style={{padding:2}} onPress={() => this.setVal(1)}><Icon name={this.state.s1} size={30} color="red" /></TouchableOpacity>
						<TouchableOpacity style={{padding:2}} onPress={() => this.setVal(2)}><Icon name={this.state.s2} size={30} color="red" /></TouchableOpacity>
						<TouchableOpacity style={{padding:2}} onPress={() => this.setVal(3)}><Icon name={this.state.s3} size={30} color="red" /></TouchableOpacity>
						<TouchableOpacity style={{padding:2}} onPress={() => this.setVal(4)}><Icon name={this.state.s4} size={30} color="red" /></TouchableOpacity>
						<TouchableOpacity style={{padding:2}} onPress={() => this.setVal(5)}><Icon name={this.state.s5} size={30} color="red" /></TouchableOpacity>
					</View>
					
					<View style={styles.reviewinput}>
						<TextInput style={{flex:1, fontSize:16}} placeholder="Enter Your Review" placeholderTextColor="#bbb" onChangeText={(text) => this.setState({rcontent:text})}
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
						<TouchableOpacity onPress={() => this.reviewsave()}>
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
		marginLeft: 10,
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
	verbose: {
		marginTop: 10,
		flexDirection:'row',
	},
	reviewbox: {
		height : 90,
		backgroundColor : 'white'
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