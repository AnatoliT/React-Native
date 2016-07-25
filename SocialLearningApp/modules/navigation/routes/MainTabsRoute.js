import React from 'react-native';

import MainTabsScreen from '../MainTabsScreen';
//import NewTeamRoute from '../../collaboration/teams/adhocFormation/routes/NewTeamRoute';

module.exports = {
    CreateMainTabsRoute :()=>{
        console.log('\ncreatin main tabs route...');
        return {   Title:'Learning Tools',
            Key:'maintabs',
            Component:MainTabsScreen //,
            //RightActions:[{name:'New', route:NewTeamRoute.CreateNewTeamRoute()  }]
        };
    },
};

