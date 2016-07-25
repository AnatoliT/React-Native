'use strict';
import React,{Component} from 'react';
import  {
    AppRegistry,

    StyleSheet,
    Text,
    View,
    Navigator,
    NativeModules
} from 'react-native';

import RegistrationRoute from '../registration/routes/RegistrationRoute';
//import TeamListingRoute from '../collaboration/teams/listing/routes/TeamListingRoute';
import LocalStore from '../registration/RegistrationLocalStore'
import MainTabsRoute from './routes/MainTabsRoute';

var GCM = NativeModules.GCM;

class LandingScreen extends Component {

    componentWillMount() {
        var self = this;
        console.log('Trying to get User from Local Store ');
        LocalStore.getRegisteredUser().then((user)=> {
            console.log('User from Local Store ='+JSON.stringify(user,null,2));

            //If user goto main menu
            if(user) {

                var route = MainTabsRoute.CreateMainTabsRoute();
                console.log('Pushing Route into Navigator ='+JSON.stringify(route,null,2)+' \nNavigator='+this.props.navigator);
                this.props.navigator.replace(route);
                if(!user.GCMId){
                    try {

                        console.log(`NO GCM ID For User. Now Registering User with GCM `);
                        GCM.register();//this is the time to register with GCM (since the user is now registered)
                        console.log('Registered User');
                    }
                    catch (exception) {
                        console.log("Error Registering" + JSON.stringify(exception));
                    }
                }
            }
            else { //Else goto
                this.props.navigator.replace(RegistrationRoute.CreateRegistrationRoute());
            }
        });
    }

    render() {
        console.log('Landing Page...');
        return <View style={{marginTop:100,marginLeft:100}}><Text>Loading...</Text></View>
    }


}

module.exports = LandingScreen;
