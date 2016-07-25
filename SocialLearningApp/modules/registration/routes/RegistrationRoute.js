var RegistrationScreen = require('../RegistrationScreen');

module.exports = {
    CreateRegistrationRoute : ()=>{
        return {
        Title:'Registration',
            Key:'registration',
            Component:RegistrationScreen
        }
    },
};
