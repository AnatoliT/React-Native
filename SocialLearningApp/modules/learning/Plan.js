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
  View,
  Modal
} from 'react-native';

import editRoute from './routes/EditLearningRoute';
import scheduleRoute from './routes/ScheduleRoute';
import ExploreRoute from './routes/ExploreRoute';
import ReviewRoute from './routes/ReviewRoute';
import Config from '../../config';
import LogRoute from './routes/LogRoute';

import Registration  from '../registration/RegistrationLocalStore';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

import NavigationBar from 'react-native-navbar';
//not used
//import DeviceInfo from 'react-native-device-info';

const REQUEST_URL = Config.apiURL +'/api/user/plan/';
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
			selected_planid: "",
			modalVisible: false,
		};
	}

	componentDidMount() {
		this.fetchLearnings();
	}

	fetchLearnings() {
        Registration.getRegisteredUser().then((user) => {
			
            var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID;
            console.log('calling ... '+fetchUrl);
			
			fetch(fetchUrl)
				.then((response) => response.json())
				.then((responsePlan) => {
					
					var myPlans = [];
					var plan_head = {};
					var k = -2;
					for (let plan of responsePlan) {
						
						if(k != plan.pflag){
							if(plan.pflag == 2){plan_head = {"Name": "In Progress", "_id": "0", "Description":"", "ImageUrl":""}}
							if(plan.pflag == 1){plan_head = {"Name": "Next to Learn", "_id": "0", "Description":"", "ImageUrl":""}}
							if(plan.pflag == 0){plan_head = {"Name": "Want to Learn", "_id": "0", "Description":"", "ImageUrl":""}}
							if(plan.pflag == -1){plan_head = {"Name": "Done", "_id": "0", "Description":"", "ImageUrl":""}}
							myPlans.push(plan_head);
						}
						var m = JSON.parse(plan.meta);
						plan.Name = m.Name;
						plan.Url = m.Url;
						plan.Description = m.Description;
						plan.ImageUrl = m.ImageUrl;
						plan.id = m.id;
						
						myPlans.push(plan);
						k = plan.pflag;
						
					}
					console.log(myPlans);
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(myPlans),
						loaded: true,
					});
					
				}).done();
				
        });
	}

	showReview(id) {
		console.log("showReview");
		this.props.navigator.push(ReviewRoute.CreateReviewRoute(id));
	}
	
	setModalVisible(visible, category) {
		if(visible == false){
			if(category == 6){
				this.setState({modalVisible: visible});
			}else{
				Registration.getRegisteredUser().then((user) => {
					fetch(REQUEST_URL + this.state.selected_planid + '?category='+ category + '&email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken), {
						method: 'PUT',
						headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							category: category,
						})
					})
						.then((response) => response.json())
						.then((responseData) => {
							if (responseData.status == 200) {
								this.setState({modalVisible: visible});
								this.fetchLearnings();
							}
						})
						.done();
				});
			}
		}else{
			this.setState({modalVisible: visible});
		}
	}
	
	setflag(id, pflag, sublearn_id) {	//0:want to learn   1:Nest to learn   2:In progress   -1:Done   3:Practice/Learning Log  4: when click Categorize
		console.log("setflag"+pflag);
		if(pflag == 3) {
			this.props.navigator.push(LogRoute.CreateLogRoute(this.props.learningID, sublearn_id));
		
		}else if(pflag == 4){
			this.setModalVisible(true);
			this.setState({selected_planid: id});
			
		}else{
			Registration.getRegisteredUser().then((user) => {
				fetch(REQUEST_URL + id + '?pflag='+ pflag +'&email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken) )
					.then((response) => response.json())
					.then((responseData) => {
						if (responseData.status == 200) {
							this.fetchLearnings();
							console.log(responseData.message);
						}
					})
			});
		}
	}
	
	renderLearning(learning) {
		
		if(learning._id=="0"){
				return (
					<View style={styles.brnchContainer}>
						<Text style={styles.title}>{ learning.Name }</Text>
					</View>
				);
		}else{
				if(learning.category==0) cat = <View></View>;
				else if(learning.category==1) cat = <View style={styles.btn}><Text style={styles.t_btn}>Theory</Text></View>;
				else if(learning.category==2) cat = <View style={styles.btn}><Text style={styles.t_btn}>Demo</Text></View>;
				else if(learning.category==3) cat = <View style={styles.btn}><Text style={styles.t_btn}>Practice</Text></View>;
				else if(learning.category==4) cat = <View style={styles.btn}><Text style={styles.t_btn}>Collaboration</Text></View>;
				else if(learning.category==5) cat = <View style={styles.btn}><Text style={styles.t_btn}>Application</Text></View>;
				
				return (
					<View style={styles.rowContainer}>
						<View style={styles.infoContainer}>
							<Image 
								source={{ uri: learning.ImageUrl=="" ? "https://127.0.0.1":learning.ImageUrl }}
								style={styles.thumbnail}
							/>
							<View style={styles.rightContainer}>
								<Text style={styles.title}>{ learning.Name }</Text>
								
								<View style={{flexDirection: 'row'}}>
									{cat}
								</View>
							</View>
							
						</View>
						<View style={styles.urlsContainer}>
							<View style={styles.urlItem}>
								<TouchableOpacity
									onPress={() => this.showReview(learning.id)}>
									<Text style={styles.itemText}>Review</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.urlItem}>
								<TouchableOpacity
									onPress={() => this.setflag(learning._id, learning.pflag==2? 1:4)}>
									<Text style={styles.itemText}>{learning.pflag==2? 'Defer':'Categorize'}</Text>
								</TouchableOpacity>
							</View>					
							<View style={styles.urlItem}>
								<TouchableOpacity
									onPress={() => this.setflag(learning._id, learning.pflag==2? -1:learning.pflag==1? 0:1)}>
									<Text style={styles.itemText}>{learning.pflag==2? 'Mark as Done':learning.pflag==1? 'Deprioritize':'Prioritize'}</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.urlItem}>
								<TouchableOpacity
									onPress={() => this.setflag(learning._id, learning.pflag==2? 3:2, learning.id)}>
									<Text style={styles.itemText}>{learning.pflag==2? 'Practice/Learning Log':'Start Progress'}</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					
				);
		}
	}

	changeTabSelection(tabName) {
	    // debugger;
		this.props.navigator.push({
			name: tabName,
		});
	    console.log(tabName);
	  }

	render() {
		const titleConfig = {
			title: 'Learning Plan',
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

		return (
			<View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig} />
					
						{ content }        
				
				<Modal  animationType={"fade"}	  transparent={true}
				     visible={this.state.modalVisible}
				     onRequestClose={() => {alert("Modal has been closed.")}} >
					<View style={{flex:1, justifyContent: 'center',	alignItems: 'center', backgroundColor:'rgba(0,0,0,0.5)'}}>
						<View style={{backgroundColor:'#fff', padding:15}}>
							
							<TouchableOpacity onPress={() => {this.setModalVisible(false, 1)}}>
								<Text style={styles.modaltext}>Theory</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {this.setModalVisible(false, 2)}}>
								<Text style={styles.modaltext}>Demo</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {this.setModalVisible(false, 3)}}>
								<Text style={styles.modaltext}>Practice</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {this.setModalVisible(false, 4)}}>
								<Text style={styles.modaltext}>Collaboration</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {this.setModalVisible(false, 5)}}>
								<Text style={styles.modaltext}>Application</Text>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {this.setModalVisible(false, 6)}}>
								<Text style={styles.modaltext1}>CANCEL</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
		
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
	listContainer: {
		//backgroundColor: 'yellow'
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rowContainer: {

	},
	rightContainer: {
		flex: 1,
		marginLeft: 10,
	},
	forward: {
		alignSelf: 'center',
	},
	infoContainer: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		flexDirection: 'row',
		flex: 1,
		padding: 5,
	},
	urlsContainer: {
		flexDirection: 'row',
		padding: 4,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	brnchContainer: {
		flexDirection: 'row',
		padding: 7,
		paddingLeft:12,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	urlItem: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,		
	},
	itemText: {
		textAlign: 'center',
		flex: 1,
		color: '#59a2e7',
		fontSize:13
	},
	thumbnail: {
		width: 100,
		height: 100,
		borderRadius: 4,
		borderColor: 'blue',
		backgroundColor: 'grey',
	},
	title: {
		fontSize: 17,
		color : 'black'
	},
	btn: {
		backgroundColor:'#ccc', borderColor:'#888', 
		borderWidth:1, borderRadius:5, marginTop:5, marginRight:5
	},
	t_btn: {
		color : '#111',
		fontSize: 12,
		marginLeft: 5,
		marginRight: 5
	},
	modaltext: {
		color : '#0c73e4',
		fontSize : 20,
		margin : 5,
		textAlign: 'center'
	},
	modaltext1: {
		color : '#333',
		fontSize : 14,
		margin : 7,
		textAlign: 'right'
	}
});

module.exports = MyLearning;