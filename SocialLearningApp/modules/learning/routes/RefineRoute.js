
var RefineRoute = require('../Refine');


module.exports = {
    CreateRefineRoute :(id, title)=>{
        return {   Title:'Refine',
            Key:'Refine',
            Component:RefineRoute,
            data:{toptitle:title, learn_id:id}
        };
    },
};

