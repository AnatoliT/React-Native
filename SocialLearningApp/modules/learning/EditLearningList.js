import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableHighlight,
  TextInput,
  ActivityIndicatorIOS,
  Text,
  View
} from 'react-native';

import Registration  from '../registration/RegistrationLocalStore';
import Config from '../../config';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
//import DeviceInfo from 'react-native-device-info';

const REQUEST_URL = Config.apiURL +'/api/user/learnings/';
//const UDID = DeviceInfo.getUniqueID();

class LearningList extends Component {
	constructor(props) {
		super(props);
		var dataSource = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,			
		});
		this.state = {
			dataSource: dataSource,
			loaded: false,
			newLearningText: '',
		};
	}

	componentDidMount() {
		this.fetchLearnings();
	}

	fetchLearnings() {
        Registration.getRegisteredUser().then((user) => {
            fetch(REQUEST_URL + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken))
                .then((response) => response.json())
			.then((responseData) => {
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

	removeRow(id) {
		console.log(id);
        Registration.getRegisteredUser().then((user) => {
            fetch(REQUEST_URL + id + '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken), {method: "DELETE"})
                .then((response) => response.json())
                .then((responseData) => {
                    if (responseData.status == 200) {
                        this.fetchLearnings();
                    }
                })
        });
	}

	addRow() {
            Registration.getRegisteredUser().then((user) => {
                fetch(REQUEST_URL+ '?email=' + encodeURIComponent(user.email) + '&secretToken=' + encodeURIComponent(user.secureToken), {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: this.state.newLearningText,
                        email: user.email,
                    })
                })
                    .then((response) => response.json())
                    .then((responseData) => {
                        if (responseData.status == 200) {
                            this.setState({
                                newLearningText: ''
                            });

                            this.fetchLearnings();
                        }
                    })

        });

	}

	changeText(text) {
		this.setState({
			newLearningText: text
		});
	}

	submitEditing(event) {
		console.log("enter clicked");
	}


	renderLearning(learning) {
		return (
			<View style={styles.rowContainer}>
				<Text style={styles.title}>{ learning.title }</Text>
				<TouchableHighlight style={styles.rightButton} onPress={() => this.removeRow(learning._id)}>
					<Icon name="minus-circle" size={30} color="#00dfff" />
				</TouchableHighlight>
			</View>
		);
	}

	renderLoadingView() {
		return (
			<View style={styles.loadingContainer}>
				<ActivityIndicatorIOS size='large' />
				<Text>
					Loading Learnings...
				</Text>
			</View>
		);
	}

	render() {
		const titleConfig = {
			title: 'what do you want to learn?',
		};

		const leftButtonConfig = {
			title: '< Back',
			handler: () => {
				this.props.navigator.pop();
			}
		};

		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
			<View style={{ flex: 1, }}>
                <NavigationBar
                    title={titleConfig}
                    leftButton={leftButtonConfig} />

				<View style={styles.container}>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.renderLearning.bind(this)}
						style={styles.listContainer}
					/>
					<View style={styles.rowContainer}>
						<TextInput 
							ref="NewLearningTextBox"
							style={styles.title} 
							onChangeText={(text) => this.changeText(text)} 
							onSubmitEditing={() => this.addRow()} 
							value={this.state.newLearningText} />
						<TouchableHighlight 
							style={styles.rightButton} 
							onPress={() => this.refs.NewLearningTextBox.focus()}>
							<Icon name="plus-circle" size={30} color="#0000ff" />
						</TouchableHighlight>
					</View>
				</View>
			</View>
			
		);
	}
}

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: 10,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightButton: {
		right: 10,
		alignItems: 'flex-end',
	},
	listContainer: {
		marginTop: 30,
	},

	title: {
		fontSize: 20,
		marginBottom: 8,
		alignItems: 'flex-start',
		flex: 10,
	}
});

module.exports = LearningList;