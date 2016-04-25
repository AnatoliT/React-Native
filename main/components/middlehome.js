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

import PickerAndroid from 'react-native-picker-android';
							  		
var Profilecomponent = React.createClass({
   getInitialState: function() { 
     
		 var context=this;
		 var age = [];
			for(let i=12; i<100; i++){
				var temp = <Picker.Item label={""+i} value={i} key={i}/>
				age.push(temp);
			}
			
		 return {     	  
		   footbar:<Text>{""}</Text>,age_tem:age
		 }
   },
 
   go_menu:function(){		
		var context = this;
		context.props.navigator.push({ name: 'profile' });
		
   },
  
   componentDidMount:function(){
	  //this.ongetprofile();
   },
    
   render: function() {
	   
       return (           
									
		  <View style={styles.container}>       
		  		 
				 <View style={{alignItems:'center', flex:0.18, justifyContent: 'flex-end', }}>
					<Text style={{color:'#777',fontSize:16, marginBottom:10}}>{'What is your Snapchat Username'}</Text>
				 </View> 
				 
				 <View style={{height:32, borderWidth:1, borderColor:'#777', alignItems:'center', width:280}}>
					 <TextInput style={{height:40, width:280, }}	 />
				 </View> 
				 
				 <View style={{alignItems:'center', flex:0.12, justifyContent: 'flex-end',}}>
					<Text style={{color:'#777',fontSize:16, marginBottom:10}}>{'Please Select your Snapchat Code'}</Text>
				 </View> 
				 
				 <View style={{height:32, borderWidth:1, borderColor:'#777', alignItems:'center', width:280}}>
					 <TextInput style={{height:40, width:280,}}
					 />
				 </View>
				 
				 <View style={{alignItems:'center', flex:0.12, justifyContent: 'flex-end', }}>
					<Text style={{color:'#777',fontSize:16, marginBottom:10}}>{'What can  Add your Snap ?'}</Text>
				 </View> 		
				 
				 <View style={{alignItems:'center', flexDirection:'row', flex:0.1, justifyContent: 'flex-end',}}>
					 <Text style={{color:'#777',fontSize:16, paddingRight:25}}>{'Gender'}</Text>
					
					 <View style={{borderWidth:1, borderColor:'#777', width:105, height:28}}>
							<Picker style={{width:100, height:25, color:'#777'}}
								selectedValue={this.state.sex}
								onValueChange={(lang) => this.setState({sex: lang})}>
							  <Picker.Item label="Male" value="Male" />
							  <Picker.Item label="Female" value="Female" />
							  <Picker.Item label="Both" value="Both" />
							</Picker>
					 </View>
				 </View>

				 <View style={{alignItems:'flex-start', width:180, flex:0.1, justifyContent: 'flex-end',}}>
					<Text style={{color:'#777',fontSize:16, marginBottom:10}}>{'Age'}</Text>
				 </View> 
				 
				 <View style={{alignItems:'center', flexDirection:'row'}}>
					 <View style={{width:60, height:85}}>
							<PickerAndroid itemStyle={{width:50, fontSize:18, textAlign:'center'}}
								selectedValue={this.state.language}
								onValueChange={(age) => this.setState({language: age})}>
									{this.state.age_tem}
							</PickerAndroid>
					 </View>
					 
					 <Text style={{color:'#777',fontSize:15, marginRight:20, marginLeft:20}}>{'To'}</Text>
					
					 <View style={{width:60, height:85}}>
							<PickerAndroid itemStyle={{width:50, fontSize:18, textAlign:'center'}}
								selectedValue={this.state.language1}
								onValueChange={(age1) => this.setState({language1: age1})}>
									{this.state.age_tem}
							</PickerAndroid>
					 </View>
				 </View>
				 
				 <View style={{alignItems:'center', flex:0.22, justifyContent: 'center'}}>
					 <View style={styles.addnew}>   
						  <TouchableOpacity style={{paddingLeft:30,paddingRight:30}} onPress={this.go_menu}>				
							<Text style={{color:'white'}}> Next </Text>	
						  </TouchableOpacity>					
					 </View>
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
		borderRadius :5,
		marginTop:3,
		marginBottom:3,
    },
	
})

AppRegistry.registerComponent('Profilecomponent', () => Profilecomponent);
module.exports = Profilecomponent;