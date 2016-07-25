'use strict';
//Message Bus for GCM is listener to GCM messages
//
// Message bus receives the message from GCM and routes it to registered services
// Every GCM message should have a data element serviceName which the data is targeted at
// A service when it registers itself with message bus would receive a call to its handleMessage
// method with data when data's serviceName element matches the service's serviceName
// Data/message can be lost. This presently has no way to handle crashes as action on message vs removing from message bus is done in wrong sequence (could be corrected in future)
//
// Every service that is registered must have three functions: handleMessage, getServiceName and getType


//for App messages, the type and serviceName both matter. type comes from IOS app infrastructure within the envelop
// the serviceName comes from the body of message sent by App
function getServiceKey(service) {
    var serviceName = service.getServiceName();
    var type = service.getType();

    var key = (type=="Message")? type + serviceName: type;
    return key;
}

//envelopKey depends on the type. If it is type = message, then key is type+serviceName else just type. serviceName from body of message and type from envelop
function getEnvelopKey(envelop) {
    var type = envelop.type;
    var serviceName = (envelop && envelop.body && envelop.body.serviceName) ? envelop.body.serviceName : "";
    return type + serviceName;
}

export default class MessageBus {



    constructor(eventEmmiter, event) {
        console.log(`registering message bus with GCM... for event ${event}`);
        var self = this;
        this.services = {};

        this.EventEmmiter = eventEmmiter;
        //Handle message - pass it to registered listeners
        this.EventEmmiter.addListener(
            event,
            (data) => self.handleMessage(data)
        );

    }

    //This should be called with service which has getServiceName and handleMessage functions
    registerService(service) {
        console.log(`registering service ${service.getServiceName()}... `);
        var key = getServiceKey(service);

        if (this.services[key])this.services[key].push(service);
        else this.services[key] = [service];
    }



    handleMessage(envelop) {
        console.log('received Message ' + JSON.stringify(envelop));
        var key = getEnvelopKey(envelop);
        if (this.services[key]) {
            console.log('There is a service regsitered for this ' + key);
            this.services[key].forEach((service) => service.handleMessage(envelop));
        }
        else {
            console.log('There is a **NO** service regsitered for this ' + key);
        }

    }

}

module.exports = MessageBus;
