
var ExploreRoute = require('../Explore');


module.exports = {
    CreateExploreRoute :(learningId, title, image)=>{
        return {   Title:'Explore',
            Key:'Explore',
            Component:ExploreRoute,
            data:{learningID:learningId, title:title, image:image}
        };
    },
};

