
var LogRoute = require('../Log');


module.exports = {
    CreateLogRoute :(learningId, sublearn_id)=>{
        return {   Title:'Refine',
            Key:'Refine',
            Component:LogRoute,
            data:{learningID:learningId, sublearn_id:sublearn_id}
        };
    },
};

