import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableHighlight,
  ActivityIndicatorIOS, 
  TabBarIOS, 
  Text,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

import editRoute from './routes/EditLearningRoute';
import scheduleRoute from './routes/ScheduleRoute';
import ExploreRoute from './routes/ExploreRoute';
import Config from '../../config';

import Registration  from '../registration/RegistrationLocalStore';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

import NavigationBar from 'react-native-navbar';
//not used
//import DeviceInfo from 'react-native-device-info';

const REQUEST_URL = Config.apiURL +'/api/user/refine/';
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
			
		};
	}

	componentDidMount() {
		this.fetchLearnings();
	}

	fetchLearnings() {
        Registration.getRegisteredUser().then((user) => {
		//var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken);
		console.log('calling ... '+fetchUrl);
		   
		//console.log(myLearnings);
			var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learn_id;
			
			fetch(fetchUrl)
				.then((response) => response.json())
				.then((refineData) => {console.log(refineData);
					console.log(refineData.refine);
						//alert(refineData.refine);							
					var rs = refineData.refine;
					
					var fetchUrl = "http://128.199.200.254:3030/api/user/topic/"+encodeURIComponent(this.props.toptitle)+"/relatedTopics?email=shishircc@gmail.com&secretToken=Jnvjs9Bdjnvksd";				
					fetch(fetchUrl)
						.then((response) => response.json())
						.then((responseData) => {
							console.log(responseData);
							//console.log(responseData[0].Resources.Books[0]);
							var myLearnings = [];
							
								for (let learning of responseData) {
									for(let r of rs){
										if(learning.id == r){
											learning.chk = "#0076ff";
											break;
										}
									}
									myLearnings.push(learning);
								}
														
							this.setState({
								dataSource: this.state.dataSource.cloneWithRows(myLearnings),
								loaded: true,
							});
						})
						.done();
				})
				.done();
				
        });
	}
	
	setrefine(id) {
		//alert(id);
		//alert(this.props.learn_id); ********My Learning ID********
		console.log("setrefine");
		
		Registration.getRegisteredUser().then((user) => {
			console.log(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID+ '&sublearning_id=' + id);
                
				fetch(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken), {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        learning_id: this.props.learn_id,
						sublearning_id: id,
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
	
	renderLearning(learning) {
		return (
			<View style={styles.rowContainer}>
				<View style={styles.infoContainer}>
					<Icon name="check" size={17} color={learning.chk?learning.chk:"transparent"} style={{marginTop:5,}}/>
					<TouchableOpacity onPress={() => this.setrefine(learning.id, learning.Name)}>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{ learning.Name }</Text>
						<View style={styles.verbose}></View>	
					</View>
					</TouchableOpacity>
				</View>
			</View>
			
		);
	}

	render() {
		const titleConfig = {
			title: 'Refine it - 2/2',
		};

		const leftButtonConfig = {
			title: '< Back',
			handler: () => this.props.navigator.pop()
		};
		
		var content;
		var content1;
		
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
			content1 = (
			    
				<View style={styles.rowContainer}>
					<View style={styles.infoContainer}>
						<Text style={styles.top_title}>My Interest</Text>
					</View>
				</View>
			);
		}

		return (
			<View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig}/>
					
					{content1}
					{content}	       

			</View>
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
	infoContainer: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		flexDirection: 'row',
		flex: 1,
		padding: 5,
	},
	top_title: {
		color: 'black',
		fontSize: 19,
		marginBottom: 10
	},
	title: {
		fontSize: 17,
		color : 'black'
	},
	verbose: {
		marginTop: 10,
	},
	
});

module.exports = MyLearning;