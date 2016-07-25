
var ScheduleRoute = require('../Schedule');


module.exports = {
    CreateScheduleRoute :(learningId)=>{
        return {   Title:'Learning Schedule',
            Key:'my-learning',
            Component:ScheduleRoute,
            data:{learningID:learningId}
        };
    },
};

