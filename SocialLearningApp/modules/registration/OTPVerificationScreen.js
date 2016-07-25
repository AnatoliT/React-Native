'use strict';

var React = require('react');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Config = require('../../config');
var Icon = require('react-native-vector-icons/FontAwesome');
import Registration from './RegistrationLocalStore';

var {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,

    } = require('react-native');



class OTPVerification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: '',
        };
    }


    render() {

        return (<View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mark} color="#4F8EF7"> Verify <Text style={styles.markWhite}>OTP</Text></Text>
            </View>
            <Text>Please enter the one time password that was emailed to your email {this.props.email} </Text>

            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Icon name="key" size={20} style={styles.inputUsername}/>
                    <TextInput style={[styles.input]} placeholder="One Time Password"
                               placeholderTextColor="#CCC" value={this.state.email}
                               onChangeText={(otp) => this.setState({otp})}
                               />
                </View>
            </View>
            <TouchableOpacity onPress={e =>{ this.verifyOTP(this.props.email,this.state.otp, this.props.name);}}>
                <View style={styles.signin}><Text style={styles.whiteFont}>Verify</Text></View>
            </TouchableOpacity>

        </View>);
    }




    verifyOTP(email, otp, name) {
        console.log('email: ' + email);
        console.log('otp: ' + otp);
        var self = this;
        var requestUrl = Config.apiURL + '/api/registration/verify/' + encodeURIComponent(email) + '/' + encodeURIComponent(otp);
        console.log('Calling '+ requestUrl);
        return fetch(requestUrl,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }).then((result) => {
            console.log('result='+JSON.stringify(result,null,2));
            if(result.ok)return result.text();
            else return "failed";
        }).then((resultText) => {


            var secureToken = resultText;
            console.log("updating local store: "+secureToken+' \nemail='+email+' \nsecretToken='+secureToken);
            console.log('Registration='+Registration);
            Registration.setRegisteredUser(email, secureToken,name);
            alert('Registration Success');
            //Sending to landing page (should redirect to right one)
            var {CreateLandingPageRoute} = require('../navigation/routes/LandingPageRoute');
            console.log('Register'+CreateLandingPageRoute);
            var route = CreateLandingPageRoute();
            console.log('Sending to '+JSON.stringify(route,null,2));
            this.props.navigator.push(route);


        }).catch((exception) => {
            console.log("Error " + JSON.stringify(exception));
            //alert('Registration Failed');
        });


    }
}




var styles = StyleSheet.create({
    container: {flexDirection: 'column', flex: 1, backgroundColor: 'transparent'},
    bg: {width: windowSize.width, height: 210},
    header: {justifyContent: 'center', alignItems: 'center', marginTop: 25, height: 40, backgroundColor: 'transparent'},
    mark: {color: 'blue', fontSize: 25, fontWeight: '800'},
    markWhite: {color: 'blue', fontSize: 25, fontWeight: '800'},
    signin: {backgroundColor: 'blue', padding: 20, alignItems: 'center', flex: .15},
    signup: {justifyContent: 'center', alignItems: 'center', flex: .15},
    inputs: {marginTop: 0, marginBottom: 10, height: 65},
    inputPassword: {marginLeft: 15, width: 20, height: 21},
    inputUsername: {marginLeft: 15, width: 20, height: 20},
    inputContainer: {padding: 10, borderWidth: 1, borderBottomColor: '#CCC', borderColor: 'transparent'},
    input: {position: 'absolute', left: 61, top: 12, right: 0, height: 35, fontSize: 14},
    forgotContainer: {alignItems: 'flex-end', padding: 15,},
    greyFont: {color: '#D8D8D8'},
    whiteFont: {color: '#FFF'},
    imageTiles: {flexDirection: 'row', flex: 0.2},
    tile: {flex: 0.33, height: 70, flexDirection: 'column', alignItems: 'center'},
    tileImage: {height: 50, flex: 0.8},
    tileText: {textAlign: 'center', flex: 0.2, width: 110, paddingBottom: 5}
})

module.exports = OTPVerification;
