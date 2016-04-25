"use strict";
/**
 ==================================================================================
 Description:       desc
 Creation Date:     3/21/16
 Author:            Osipe
 ==================================================================================
 Revision History
 ==================================================================================
 Rev    Date        Author           Task                Description
 ==================================================================================
 1      3/21/16     Osipe          TaskNumber          Created
 ==================================================================================
 */
var React = require('react-native');
var {NativeModules} = require('react-native');
var server_auth = require('./server_auth');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
	Image,
	ScrollView,
	TouchableOpacity,
	DrawerLayoutAndroid,
	Picker
} = React;
						  		
var Profilecomponent = React.createClass({
   getInitialState: function() { 
     
	 var context=this;
	 
	 return {     	  
	   footbar:<Text>{""}</Text>
     }
   },
   
   go_before:function(){
	   this.props.navigator.pop();
   },
   
   find_user:function(){
	   this.props.navigator.push({name:'behome'});
   },
  
   componentDidMount:function(){
	  //this.ongetprofile();
   },
    
   render: function() {
	   
       return (           
									
		  <View style={styles.container}>       
		  		 				 
				 <View style={{alignItems:'center', flex:0.2, justifyContent: 'flex-end'}}>
					 <View style={styles.addnew}>   
						  <TouchableOpacity style={{paddingLeft:52,paddingRight:52, paddingTop:10,paddingBottom:10}} onPress={this.find_user}>				
							<Text style={{color:'white', fontSize:20, fontWeight:'bold'}}> Find Users </Text>	
						  </TouchableOpacity>					
					 </View>
				 </View>
				 
				 <View style={{alignItems:'center', flex:0.3, justifyContent: 'center'}}>
					 <View style={styles.addnew}>   
						  <TouchableOpacity style={{paddingLeft:30,paddingRight:30, paddingTop:10,paddingBottom:10}} onPress={this.go_before}>				
							<Text style={{color:'white', fontSize:20, fontWeight:'bold'}}> My Preferences </Text>	
						  </TouchableOpacity>					
					 </View>
				 </View>
				 
				 <View style={{alignItems:'center', flex:0.3, justifyContent: 'flex-start'}}>
					 <View style={styles.addnew}>   
						  <TouchableOpacity style={{paddingLeft:30,paddingRight:30, paddingTop:10,paddingBottom:10}} onPress={this.login_check}>				
							<Text style={{color:'white', fontSize:20, fontWeight:'bold'}}> Change Picture </Text>	
						  </TouchableOpacity>					
					 </View>
				 </View>
				 
				 <View style={{width:windowSize.width, flex:0.1, justifyContent: 'center', backgroundColor: '#04D03F',}}>
				 </View>
				 
          </View>
		
       );
		
  },
  
});

var styles = StyleSheet.create({
    
	container: {
      flexDirection: 'column',
      flex: 1,
	  margin :10,
      backgroundColor: 'white',
	  alignItems:'center',
	  borderWidth: 1,
	  borderColor:'#bbb'
    },   
    
	addnew: {
		
        backgroundColor: '#f46527',
        padding: 6,        
		alignItems: 'center',
		//borderRadius :5,
		marginTop:3,
		marginBottom:3,
    },
	
})

AppRegistry.registerComponent('Profilecomponent', () => Profilecomponent);
module.exports = Profilecomponent;