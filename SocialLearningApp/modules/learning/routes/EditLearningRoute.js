var EditLearningScreen = require('../EditLearningList');


module.exports = {
    CreateEditLearningRoute :()=>{
        return {   Title:'Edit Learning',
            Key:'edit-learning',
            Component:EditLearningScreen
        };
    },
};

