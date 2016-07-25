'use strict';
var React = require('react-native');
var {
    AsyncStorage,
    } = React;
const STORAGE_KEY = "registeredUser";


var getRegisteredUser = async function () {
    try {
        //console.log('Get all keys...');
        //AsyncStorage.getAllKeys((err, keys) => {
        //    console.log(`Get all error  ${JSON.stringify(err)} , keys ${JSON.stringify(keys)}`);
        //    AsyncStorage.multiGet(keys, (err, stores) => {
        //        console.log(`multiget error ${JSON.stringify(err)}`);
        //        stores.map((result, i, store) => {
        //            // get at each store's key/value so you can work with it
        //
        //            let key = store[i][0];
        //            let value = store[i][1];
        //            console.log(`Get ALL - key=${key}, value=${value}`);
        //        });
        //    });
        //});

        var registeredUser = await AsyncStorage.getItem(STORAGE_KEY);
        //clear(); // TO REMOVE ALL LOCALSTORAGE
        console.log("registeredUser: " + JSON.stringify(registeredUser));
        if (registeredUser) {

            var user = JSON.parse(registeredUser);
            console.log("USER RETRIEVED=" + JSON.stringify(user));
            return user;
        }
        else {
            console.log('NO USER');
            return null;
        } //user is not registerd yet

    } catch (error) {
        console.log("Error in getting registered user " + JSON.stringify(error));
        return null;
    }

}

var setRegisteredUser = async function (email, secureToken, name) {
    try {
        console.log('Set registered user : ' + email + ' secureToken:' + secureToken+ ' name:'+name);
        var registeredUser = {email: email, secureToken: secureToken, name:name};
        var user = JSON.stringify(registeredUser);
        //var b = "d";
        console.log('SAVING =' + user);
        AsyncStorage.setItem(STORAGE_KEY, user).then((error)=>{

        });



    } catch (error) {
        console.log("ERROR:" + JSON.stringify(error));
    }

}


var setGCMId = async function (gcmId) {
    try {
        console.log('Setting the GCM ID in localstore');
        var user = await getRegisteredUser();
        if(user){
            user.GCMId = gcmId;
            console.log('SAVING =' + JSON.stringify(user));
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        }
        else {
            throw `ERROR : null user retrieved ${user}`;
        }
        return user;

    } catch (error) {
        console.log("Error setting GCMID " + JSON.stringify(error));
        throw error;
    }

}

module.exports = {

    getRegisteredUser: getRegisteredUser,
    setRegisteredUser: setRegisteredUser,
    setGCMId: setGCMId
}
