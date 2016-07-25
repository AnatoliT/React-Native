
var ReviewRoute = require('../Review');


module.exports = {
    CreateReviewRoute :(learningId)=>{
        return {   Title:'Refine',
            Key:'Refine',
            Component:ReviewRoute,
            data:{learningID:learningId}
        };
    },
};

