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
import RefineRoute from './routes/RefineRoute';
import PlanRoute from './routes/PlanRoute';
import LogRoute from './routes/LogRoute';
import Config from '../../config';


import Registration  from '../registration/RegistrationLocalStore';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

import NavigationBar from 'react-native-navbar';
//not used
//import DeviceInfo from 'react-native-device-info';


const REQUEST_URL = Config.apiURL +'/api/user/learnings/';
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
            var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken);
            console.log('calling ... '+fetchUrl);
            fetch(fetchUrl)
                .then((response) => response.json())
                .then((responseData) => {
                    var myLearnings = [];
                    for (let learning of responseData) {
                        myLearnings.push(learning);
                    }

                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(myLearnings),
                        loaded: true
                    });
                })
                .done();
        });
	}

	refine(id, title) {
		console.log("refine");
		this.props.navigator.push(RefineRoute.CreateRefineRoute(id, title));
	}

	showLearningPlan(id) {
		console.log("showLearningPlan");
		this.props.navigator.push(PlanRoute.CreatePlanRoute(id));
	}

	showLog(id) {
		console.log("showLearningLog");
		this.props.navigator.push(LogRoute.CreateLogRoute(id, "0"));
	}

	showSchedule(id) {
		console.log("showSchedule");
		this.props.navigator.push(scheduleRoute.CreateScheduleRoute(id));
	}
	
	showExplore(id, title, image) {
		console.log(id+"showExplore");
		this.props.navigator.push(ExploreRoute.CreateExploreRoute(id, title, image));
	}

	renderLearning(learning) {
		return (
			<View style={styles.rowContainer}>
				<TouchableOpacity onPress={() => this.showExplore(learning._id, learning.title, learning.image)}>
				<View style={styles.infoContainer}>
					<Image 
						source={{ uri: learning.image }}
						style={styles.thumbnail}
					/>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{ learning.title }</Text>
						<View style={styles.counts}>
							<Text style={styles.count}>{ learning.reads ? learning.reads : 'No' } Read{ learning.reads && learning.reads > 0 ? 's' : ''}</Text>
							<Text style={styles.count}>{ learning.practice ? learning.practice : 'No' } Practice{ learning.practice && learning.practice > 0 ? 's' : ''}</Text>
							<Text style={styles.count}>{ learning.learning ? learning.learning : 'No' } Practice{ learning.learning && learning.learning > 0 ? 's' : ''}</Text>
						</View>		
						<View style={styles.verbose}>
							<Text>Focus Areas: None (click refine it to define)</Text>
							<Text>Time Commitment: None (click refine it to define)</Text>
						</View>	
						
					</View>
					<View style={styles.forwardContainer}>
						
						<Icon name="chevron-right" size={40} color="#00dfff" style={styles.forward} />	
						
					</View>
				</View>
				</TouchableOpacity>
				<View style={styles.urlsContainer}>
					<View style={styles.urlItem}>
						<TouchableHighlight
							underlayColor='#99f48c'
							onPress={() => this.refine(learning._id, learning.title)}>
							<Text style={styles.itemText}>Refine{"\n"}it</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.urlItem}>
						<TouchableHighlight
							onPress={() => this.showLearningPlan(learning._id)}>
							<Text style={styles.itemText}>My{"\n"}Learning Plan</Text>
						</TouchableHighlight>
					</View>					
					<View style={styles.urlItem}>
						<TouchableHighlight
							onPress={() => this.showLog(learning._id)}>
							<Text style={styles.itemText}>My Learning/{"\n"}Practice Log</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.urlItem}>
						<TouchableHighlight
							onPress={() => this.showSchedule(learning._id)}>
							<Text style={styles.itemText}>Schedule</Text>
						</TouchableHighlight>
					</View>
				</View>
			</View>
			
		);
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
			title: 'My Learning',
		};

		const rightButtonConfig = {
			title: 'New',
			handler: () => this.props.navigator.push(editRoute.CreateEditLearningRoute())
		};

		var content;

		if (!this.state.loaded) {
			content = (
				<View style={styles.loadingContainer}>
					<ActivityIndicatorIOS size='large' />
					<Text>
						Loading My Learnings...
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
                    rightButton={rightButtonConfig} />

                		{ content }        

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
	urlsContainer: {
		flexDirection: 'row',
		padding: 10,
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
		color: 'blue',
		alignSelf: 'center',
	},
	thumbnail: {
		width: 100,
		height: 100,
		borderRadius: 4,
		borderColor: 'blue',
		backgroundColor: 'grey',
	},
	title: {
		fontSize: 30,
	},
	counts: {
		flexDirection: 'row',
	},
	verbose: {
		marginTop: 10,
	},
	count: {
		marginRight: 20,
		color: '#0023f5',
	}
});

module.exports = MyLearning;