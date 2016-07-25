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
import ReviewRoute from './routes/ReviewRoute';
import Config from '../../config';

import Registration  from '../registration/RegistrationLocalStore';

import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

import NavigationBar from 'react-native-navbar';
//not used
//import DeviceInfo from 'react-native-device-info';


const REQUEST_URL = Config.apiURL +'/api/user/plan/';
const REQ_URL = Config.apiURL +'/api/user/refine/';

class MyLearning extends Component {
	constructor(props) {
		super(props);
		var dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,			
		});
		this.state = {
			dataSource: dataSource,
			loaded: false,
			flag: "1",
			learning_Topic: "",
			t1:"#59a2e7", t2:"#aaa", t3:"#aaa", t4:"#aaa",
		};
	}

	componentDidMount() {
		this.fetchLearnings();
	}

	fetchLearnings() {
        Registration.getRegisteredUser().then((user) => {
            //var fetchUrl = REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken);
            //console.log('calling ... '+fetchUrl);
			
			var fetchUrl = REQ_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID;
			
			fetch(fetchUrl)
				.then((response) => response.json())
				.then((refineData) => {console.log(refineData);
					console.log(refineData.refine);
											
					var rs = refineData.refine.toString();  
					var subids= "";
					if(rs != "")subids="&subtopicids="+rs;
					//alert(subids);
						var fetchUrl = "http://128.199.200.254:3030/api/user/topic/"+encodeURIComponent(this.props.title)+"?email=shishircc@gmail.com&secretToken=Jnvjs9Bdjnvksd"+subids;
						fetch(fetchUrl)
							.then((response) => response.json())
							.then((responseData) => {
								console.log(responseData[0].Resources.Books[0]);
								var myLearnings = [];
								
								if(this.state.flag==1){
									for (let learning of responseData[0].Resources.Books) {
										myLearnings.push(learning);
									}
								}
								if(this.state.flag==2){
									for (let learning of responseData[0].Resources.Videos) {
										myLearnings.push(learning);
									}
								}
								if(this.state.flag==3){
									for (let learning of responseData[0].Resources.Articles) {
										myLearnings.push(learning);
									}
								}
								if(this.state.flag==4 && responseData[0].Resources.Courses){
									for (let learning of responseData[0].Resources.Courses) {
										myLearnings.push(learning);
									}
								}
								this.setState({
									dataSource: this.state.dataSource.cloneWithRows(myLearnings),
									loaded: true,
									//learning_Topic: responseData[0].Topic
								});
						})
						.done();
				})
				.done();
        });
	}

	addplan(id, meta) {
		console.log("addplan" + this.props.learningID);
		console.log(meta);
		
        Registration.getRegisteredUser().then((user) => {
			console.log(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken)+ '&learning_id=' + this.props.learningID+ '&sublearning_id=' + id);
                
				fetch(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken), {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        learning_id: this.props.learningID,
						sublearning_id: id,
                        email: user.email,
						meta: meta,
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        if (responseData.status == 200) {
							console.log(responseData.message);
							
                        }
                    })

        });
		
	}
	
	view(id) {
		console.log("view");
	}

	showReview(id) {
		console.log("showReview");
		this.props.navigator.push(ReviewRoute.CreateReviewRoute(id));
	}
	
	bookview(index) {
		console.log("bookview");
		this.setState({flag : index});
		this.fetchLearnings();
		if(index==1){this.setState({t1:"#59a2e7"}); this.setState({t2:"#aaa"}); this.setState({t3:"#aaa"}); this.setState({t4:"#aaa"});}
		if(index==2){this.setState({t1:"#aaa"}); this.setState({t2:"#59a2e7"}); this.setState({t3:"#aaa"}); this.setState({t4:"#aaa"});}
		if(index==3){this.setState({t1:"#aaa"}); this.setState({t2:"#aaa"}); this.setState({t3:"#59a2e7"}); this.setState({t4:"#aaa"});}
		if(index==4){this.setState({t1:"#aaa"}); this.setState({t2:"#aaa"}); this.setState({t3:"#aaa"}); this.setState({t4:"#59a2e7"});}
	}

	renderLearning(learning) {
		return (
			<View style={styles.rowContainer}>
				<View style={styles.infoContainer}>
					<Image 
						source={{ uri: learning.ImageUrl=="" ? "https://127.0.0.1":learning.ImageUrl }}
						style={styles.thumbnail}
					/>
					<View style={styles.rightContainer}>
						<Text style={styles.title}>{ learning.Name }</Text>
							
						<View style={styles.verbose}>
							<Text>{ learning.Description }</Text>
						</View>	
						
					</View>
					
				</View>
				<View style={styles.urlsContainer}>
					<View style={styles.urlItem}>
						<TouchableHighlight
							underlayColor='#99f48c'
							onPress={() => this.view(learning.id)}>
							<Text style={styles.itemText}>View</Text>
						</TouchableHighlight>
					</View>
					<View style={styles.urlItem}>
						<TouchableHighlight
							onPress={() => this.showReview(learning.id)}>
							<Text style={styles.itemText}>Reviews</Text>
						</TouchableHighlight>
					</View>					
					<View style={styles.urlItem}>
						<TouchableHighlight
							onPress={() => this.addplan(learning.id, learning)}>
							<Text style={styles.itemText}>Add to{"\n"}Learning Plan</Text>
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
			title: 'Explore',
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
						<Image 
							source={{ uri: this.props.image=="" ? "https://127.0.0.1":this.props.image }}
							style={styles.top_thumbnail}
						/>
						<View style={styles.rightContainer}>
							<Text style={styles.top_title}>{this.props.title}</Text>
						</View>
						
					</View>
					<View style={styles.urlsContainer1}>
						<View style={styles.urlItem}>
							<TouchableOpacity
								onPress={() => this.bookview(1)}>
								<Text style={{color: this.state.t1, fontSize:17}}>Books</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.urlItem}>
							<TouchableOpacity
								onPress={() => this.bookview(2)}>
								<Text style={{color: this.state.t2, fontSize:17}}>Videos</Text>
							</TouchableOpacity>
						</View>					
						<View style={styles.urlItem}>
							<TouchableOpacity
								onPress={() => this.bookview(3)}>
								<Text style={{color: this.state.t3, fontSize:17}}>Articles</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.urlItem}>
							<TouchableOpacity
								onPress={() => this.bookview(4)}>
								<Text style={{color: this.state.t4, fontSize:17}}>Courses</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			);
		}

		return (
			<View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig} />
					
						{ content1 }
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
		padding: 4,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	urlsContainer1: {
		flexDirection: 'row',
		padding: 12,
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
	},
	thumbnail: {
		width: 100,
		height: 100,
		borderRadius: 4,
		borderColor: 'blue',
		backgroundColor: 'grey',
	},
	top_thumbnail:{
		width: 80,
		height: 80,
		borderRadius: 4,
		backgroundColor: '#ccc',
		borderWidth:1,
		borderColor:'#333',
		margin:10
	},
	title: {
		fontSize: 18,
		color : 'black'
	},
	top_title: {
		fontSize: 22,
		color : 'black'		
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