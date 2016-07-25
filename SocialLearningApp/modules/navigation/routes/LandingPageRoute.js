import React from 'react-native';
console.log('Loading Lading Page Routes 1');

import LandingPageScreen from '../LandingScreen';
console.log('Loading Lading Page Routes');

module.exports = {
    CreateLandingPageRoute :()=>{
        console.log('\ncreatin landing page route...');
        return {   Title:'Loading',
            Key:'loading',
            Component:LandingPageScreen,
        };
    },
};

