/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import Navigation from './modules/navigation/Navigation'

class SocialLearningApp extends Component {
    render() {
        return <Navigation />;
    }
}

AppRegistry.registerComponent('SocialLearningApp', () => SocialLearningApp);
