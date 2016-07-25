var VerificationScreen = require('../OTPVerificationScreen');


module.exports = {
    CreateOTPVerificationRoute :(email,name)=>{
        return {   Title:'Registration',
            Key:'registration',
            Component:VerificationScreen,
            data:{email:email, name:name}
        };
    },
};

