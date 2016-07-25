'use strict';
import React, {Component} from 'react';
import  {
    AppRegistry,
    NativeModules,
    StyleSheet,
    Text,
    View,
    Navigator,
    PixelRatio,
    NativeAppEventEmitter,
} from 'react-native';
import TitleBarMapper from './TitleBarMapper';

import LandingPageRoute from './routes/LandingPageRoute';
//Register to GCM MessageBus
// Registration listens to this GCM Bus for gcm registration token
import  MessageBus from '../messagebus/MessageBusService';
import RegistrationMessageBusService from '../registration/RegistrationMessageBusService';
//import  ChatService from '../collaboration/chat/ChatMessageBusService';

var _messageBus = new MessageBus(NativeAppEventEmitter,'GCMEvent');//listen to all GCMEvent
//var _chatService = new ChatService();
var _registrationService = new RegistrationMessageBusService();

//_messageBus.registerService(_chatService);//This will now recieve all messages related to chat
_messageBus.registerService(_registrationService); //This will now receive all messages related to registration

console.log("Native Modules = "+Object.keys(NativeModules));

var GCM = NativeModules.GCM;

console.log("GCM="+GCM);

import codePush from "react-native-code-push";

class Navigation extends Component {
    componentDidMount() {
      //codePush.sync();
    }
    render() {
        var self = this;
        return <Navigator
            initialRoute={LandingPageRoute.CreateLandingPageRoute()}
            sceneStyle={styles.scene}
            renderScene={self.renderScene}
            ref={(ref) => self.myNavigator = ref}
        />
    }

    renderScene(route, navigator) {
        var Component = route.Component;
        console.log('Component ='+Component);
        return <Component
            name={route.Key}
            navigator={navigator}
            {...route.data}
        />;
    }

    componentWillUnmount(){
        console.log('Unmounting navigation...');
    }

    componentWillMount(){
        console.log('Mounting navigation...');
    }
}



var styles = StyleSheet.create({
    scene: {
        flex: 1,
        marginTop:0
    },
    navBar: {
        backgroundColor: 'white',

        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
            height: 1 / PixelRatio.get(),
            width: 1 / PixelRatio.get()
        },
    }
});


module.exports = Navigation;
