//This service listens for registration messages from GCM
// This then updates the backend with right GCM token
// This should in future handle various scenarios around this such as re-registration or de-registration
//

import Registration from './RegistrationLocalStore';
import config from '../../config';


class RegistrationMessageBusService {

    //service name here is not actually used to calculate key in messagebus class
    getServiceName() {
        return "Registration";
    }

    getType() {
        return "Registration";
    }

    handleMessage(data){
        console.log(`registering the GCM at server ${JSON.stringify(data)}`);

        if(data ){
            console.log('Saving the data ');
            Registration.setGCMId(data.registrationToken);

            //Update in backend
            Registration.getRegisteredUser().then((user)=>{
                console.log(`THERE IS a registered user ${JSON.stringify(user)}`);

                if(user){
                    console.log();
                    var requestUrl = config.apiURL + `/api/user/updateGCM?email=${encodeURIComponent(user.email)}&secretToken=${encodeURIComponent(user.secureToken)}`;
                    console.log('request url=' + requestUrl);

                    fetch(
                        requestUrl,
                        {
                            method:"POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body:JSON.stringify(
                                {
                                    gcmId:data.registrationToken
                                })
                        }
                    )
                        .then((response) => response.text())
                        .then((responseText) => {
                            console.log('Response to Saving GCM ID '+responseText);

                        });
                }
                else {
                    console.log("ERROR: GCM token retrieved though user has not registered");
                }
            });
        }
        else{
            console.log(`Wrong service targetted. Expected .servicename to be '${this.getServiceName()}' but data is ${JSON.stringify(data)}`);
        }



    }
}

module.exports = RegistrationMessageBusService;