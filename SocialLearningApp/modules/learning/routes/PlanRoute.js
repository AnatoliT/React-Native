
var PlanRoute = require('../Plan');


module.exports = {
    CreatePlanRoute :(learningId)=>{
        return {   Title:'Plan',
            Key:'Plan',
            Component:PlanRoute,
            data:{learningID:learningId}
        };
    },
};

