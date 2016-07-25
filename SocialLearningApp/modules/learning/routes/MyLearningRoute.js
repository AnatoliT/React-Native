var MyLearningScreen = require('../MyLearning');



module.exports = {
    CreateMyLearningRoute :()=>{
        return {   Title:'My Learning',
            Key:'my-learning',
            Component:MyLearningScreen
        };
    },
};

