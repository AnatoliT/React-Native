import CachingStore from './CachingStore';
var Config = require('../config');


function getAll(email,secretToken) {

    var requestUrl = Config.apiURL + '/api/user/teams?email=' + encodeURIComponent(email) + '&secretToken=' + encodeURIComponent(secretToken);

    //fetch and return result as a promise (or exception)
    return fetch(requestUrl,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        }).then((result) => {
        //var resultJson = JSON.stringify(result, null, 2);
        //console.log('result=' + resultJson);
        if (result.ok)return result.text();
        else throw result;
    }).then((resultText) => {
        console.log('json result='+resultText);

        var teams = JSON.parse(resultText);
        //this.setState({teams:teams});
        return teams;
    }).catch((exception) => {
        var error = "Error " + JSON.stringify(exception);
        console.log(error);
        throw exception;
    });
}

var _teamsCachingStore = null;
var _email = null;
var _secretToken = null;

function CreateTeamsCachingStore(email, secretToken){

    if (_teamsCachingStore == null || _email != email || secretToken != _secretToken ){
        teamsCachingStore = new CachingStore('teams',getAll,[email, secretToken]);
    }

    return teamsCachingStore;

}


module.exports = {
    CreateTeamsCachingStore: CreateTeamsCachingStore
};