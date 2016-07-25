'use strict';

var React = require('react');

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import Config from '../../config';
var Icon = require('react-native-vector-icons/FontAwesome');
var CreateOTPVerificationRoute =  require('./routes/OTPVerificationRoute').CreateOTPVerificationRoute;
console.log('CreateOTPVerificationRoute='+CreateOTPVerificationRoute);
console.log('Config ' + JSON.stringify(Config, null, 2));

var {
    Animated,
    Image,
    Text,
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,

    } = require('react-native');



class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            marginTop: new Animated.Value(0),
        };

    }


    render() {
        var self = this;
        return <Animated.View style={[styles.container,{marginTop: this.state.marginTop}]}>
            <View style={styles.header}>
                <Text style={styles.mark} color="#4F8EF7"> Jourley <Text style={styles.markWhite}></Text></Text>
            </View>
            <Image style={styles.bg} resizeMode="cover" source={require('./images/social2.jpg')}/>

            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Icon name="user" size={20} style={styles.inputUsername}/>
                    <TextInput autoCapitalize="words" style={[styles.input]} placeholder="Enter Name"
                               placeholderTextColor="#CCC"
                               onChangeText={(name) => this.setState({name})}
                               onFocus={function(){
                                   Animated.timing(          // Uses easing functions
                                       self.state.marginTop,    // The value to drive
                                       {toValue: -220}            // Configuration
                                     ).start();                // Don't forget start!
                               }}
                               onBlur={
                                 function() {
                                                                     Animated.timing(          // Uses easing functions
                                       self.state.marginTop,    // The value to drive
                                       {toValue: 0}            // Configuration
                                     ).start();                // Don't forget start!

                                 }
                               }
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name="envelope" size={20} style={styles.inputUsername}/>
                    <TextInput keyboardType="email-address" autoCapitalize="none" style={[styles.input]} placeholder="Enter Email"
                               placeholderTextColor="#CCC"
                               onChangeText={(email) => this.setState({email})}
                               onFocus={function(){
                                   Animated.timing(          // Uses easing functions
                                       self.state.marginTop,    // The value to drive
                                       {toValue: -220}            // Configuration
                                     ).start();                // Don't forget start!
                               }}
                               onBlur={
                                 function() {
                                                                     Animated.timing(          // Uses easing functions
                                       self.state.marginTop,    // The value to drive
                                       {toValue: 0}            // Configuration
                                     ).start();                // Don't forget start!

                                 }
                               }
                    />
                </View>
            </View>
            <TouchableOpacity onPress={e =>{ this.registerUser(this.state.email, this.state.name);}}>
                <View style={styles.signin}><Text style={styles.whiteFont}>Register</Text></View>
            </TouchableOpacity>

            <View style={styles.imageTiles}>
                <View style={styles.tile}>
                    <Text>Discover</Text>
                    <Image style={styles.tileImage} resizeMode="contain"
                           source={require('./images/discover.jpg')}></Image>
                </View>
                <View style={styles.tile}>
                    <Text>Go Deep</Text>
                    <Image style={styles.tileImage} resizeMode="contain" source={require('./images/deep.jpg')}></Image>
                </View>
                <View style={styles.tile}>
                    <Text style={styles.tileText}>Advisors</Text>
                    <Image style={styles.tileImage} resizeMode="contain"
                           source={require('./images/advisor.jpg')}></Image>
                </View>
            </View>

        </Animated.View>;
    }

    registerUser(email, name) {
        console.log('Registering user ' + email);
        var requestUrl = Config.apiURL + '/api/registration/register/' + encodeURIComponent(email)+'/'+encodeURIComponent(name);
        console.log('request url=' + requestUrl);
        return fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((result) => {
            console.log('Result'+JSON.stringify(result,null,2));
            return result.text();
        }).then((text)=> {
            console.log("Result="+JSON.stringify(text));
            //Success - goto OTP Verification
            console.log('Calling otp Route creation function'+CreateOTPVerificationRoute);
            var otpRoute = CreateOTPVerificationRoute(email,name);
            console.log('Route = ' + JSON.stringify(otpRoute, null, 2) );
            this.props.navigator.push(otpRoute);
        }).catch((ex)=> {
            console.log("Error on calling the registration API " + JSON.stringify(ex));
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
    inputs: {marginTop: 0, marginBottom: 10, height: 85},
    inputPassword: {marginLeft: 15, width: 20, height: 21},
    inputUsername: {marginLeft: 15, width: 20, height: 20},
    inputContainer: {padding: 10, borderWidth: 1,  borderColor: 'transparent'},
    input: {position: 'absolute', left: 61, top: 12, right: 0, height: 35, fontSize: 14, paddingBottom:10},
    forgotContainer: {alignItems: 'flex-end', padding: 15,},
    greyFont: {color: '#D8D8D8'},
    whiteFont: {color: '#FFF'},
    imageTiles: {flexDirection: 'row', flex: 0.2},
    tile: {flex: 0.33, height: 70, flexDirection: 'column', alignItems: 'center'},
    tileImage: {height: 50, flex: 0.8},
    tileText: {textAlign: 'center', flex: 0.2, width: 110, paddingBottom: 5},

})

module.exports = Register;
