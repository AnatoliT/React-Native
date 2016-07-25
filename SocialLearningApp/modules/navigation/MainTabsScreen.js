'use strict';

var React = require('react');
var {
    StyleSheet,
    Text,
    View,
    } = require('react-native');
var Tabs = require('react-native-tabs');
//import TeamsListingScreen from '../collaboration/teams/listing/TeamListingScreen';
import LearningScreen from '../learning/MyLearning';
import Icon from 'react-native-vector-icons/Ionicons';


console.log('Main Tabs Menu');

class MainTabsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {page:'second'};
    }
    render() {
        console.log('rendings main tabs...');
        var self = this;
        var TabContent = (<View><Text style={styles.welcome}>
                                    Welcome to React Native
                                </Text>
                                <Text style={styles.instructions}>
                            Selected page: {this.state.page}
                        </Text></View>);

        if(this.state.page == 'second') {
            TabContent = <LearningScreen navigator={this.props.navigator} />;
        }else {
            TabContent = <LearningScreen navigator={this.props.navigator} />;
        }

        return (
            <View style={styles.container}>
                <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
                       onSelect={el=>this.setState({page:el.props.name})}>
                    <View name="first"><Icon name="ios-search" size={30} color="#4F8EF7" /><Text >Search</Text></View>
                    <View name="second"><Icon name="ios-list-outline" size={30} color="#4F8EF7" /><Text >My Learning</Text></View>

                </Tabs>
                <View style={styles.tabContent}>
                    {TabContent}
                </View>
            </View>
        );
    }
}

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    tabContent:{
        height: windowSize.height-120,
        width: windowSize.width

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = MainTabsScreen;