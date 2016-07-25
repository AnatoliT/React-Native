'use strict';
var React = require('react-native');
var {
    AsyncStorage,
} = React;
import _ from 'underscore';

const CACHING_PREFIX = "Caching-";

class CachingStore {

    //getAll must be a asynchronous call to fetch data returning a javascript promise
    //returned items must be an array of items with "_id" as key for each (or specify the id field)
    //paramsArray is list of parameters to be passed to getAll
    constructor(name, getAll, paramsArray, idField){
        this._name = name;
        this._paramsArray = paramsArray;
        this._getAll = getAll;
        this._idField = idField || '_id';
        //call get all with parameters passed as array
        getAll.apply(null,paramsArray).then(result => {

            AsyncStorage.setItem(CACHING_PREFIX+name, JSON.stringify(result));
        });

    }

    getAll(){
        var self = this;

        //check from localstore
        return AsyncStorage.getItem(CACHING_PREFIX+self._name).then(result => {

            //asynchronously fetch data from network (to update data) without causing delays in this functions return time
            var networkFetchPromise = self._getAll.apply(null,self._paramsArray).then(result => {
                console.log('Updating cache...');
                AsyncStorage.setItem(CACHING_PREFIX+self._name, JSON.stringify(result));
                return result;
            });

            //if localstorage does not have data, return network promise
            if(!result){
                console.log('Cache miss... returning from network');
                //asynchronously fetch data in background
                return networkFetchPromise;
            }
            else {
                console.log('Cache HIT!... returning from cache');

                //else return localstore result
                return JSON.parse(result);
            }
        });

    }

    get(id){
        return this.getAll().then(results => _.find(results,result => (result[this._idField]==id)));
    }


}

module.exports = CachingStore;