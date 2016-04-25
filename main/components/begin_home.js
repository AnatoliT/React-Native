/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';

import PickerAndroid from 'react-native-picker-android';

var {NativeModules} = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Beginhomecomponent extends Component {
   
	  constructor(props) {
			super(props);
			this.state = {
			  dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			  }),
			  loaded: false,
			};
			
			
	  }
  
	  componentDidMount() {
			this.fetchData();
			var age = [];
			for(var i=12; i<100; i++){
				var temp = <Picker.Item label={""+i} value={i} key={i}/>;
				age.push(temp);
			}
			this.setState({age_tem:age});
	  }
	  
	  fetchData() {
		fetch(REQUEST_URL)
		  .then((response) => response.json())
		  .then((responseData) => {
			this.setState({
			  dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
			  loaded: true,
			});
		  })
		  .done();
	  }  
  
	  render() {
		if (!this.state.loaded) {
		  return this.renderLoadingView();
		}

		return (
		
			<View style={{flex:1}}>
				  <View style={{alignItems:'center', flexDirection:'row', marginTop:5}}>
					 <View style={{borderWidth:1, borderColor:'#777', width:105, height:28, marginLeft:20, marginRight:20}}>
							<Picker style={{width:100, height:25, color:'#777'}}
								selectedValue={this.state.sex}
								onValueChange={(lang) => this.setState({sex: lang})}>
							  <Picker.Item label="Male" value="Male" />
							  <Picker.Item label="Female" value="Female" />
							  <Picker.Item label="Both" value="Both" />
							</Picker>
					 </View>
					 <View style={{width:60, height:85,}}>
							<PickerAndroid itemStyle={{width:50, fontSize:16, textAlign:'center'}}
								selectedValue={this.state.language}
								onValueChange={(age) => this.setState({language: age})}>
									{this.state.age_tem}
							</PickerAndroid>
					 </View>
					 
					 <Text style={{color:'#777',fontSize:15, marginRight:20, marginLeft:20}}>{'To'}</Text>
					
					 <View style={{width:60, height:85}}>
							<PickerAndroid itemStyle={{width:50, fontSize:16, textAlign:'center'}}
								selectedValue={this.state.language1}
								onValueChange={(age1) => this.setState({language1: age1})}>
									{this.state.age_tem}
							</PickerAndroid>
					 </View>
					 	
				 </View>
				  
				 <ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderMovie}
					style={styles.listView}
				 />
			</View>
			
		);
	  }
	  
	  renderLoadingView() {
		return (
		  <View style={styles.container}>
			<Text>
			  Loading movies...
			</Text>
		  </View>
		);
	  }

	  renderMovie(movie) {
		return (
		  <View style={styles.container}>
			<Image
			  source={{uri: movie.posters.thumbnail}}
			  style={styles.thumbnail}
			/>
			<View style={styles.rightContainer}>
			  <Text style={styles.title}>{movie.title}</Text>
			  <Text style={styles.year}>{movie.year}</Text>
			</View>
		  </View>
		);
	  }
  
};


var styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		margin :4,
	},
	
    rightContainer: {
		flex: 1,
	},
	
	  thumbnail: {
		width: 70,
		height: 70,
	  },
  
	  title: {
		fontSize: 18,
		marginBottom: 8,
		textAlign: 'center',
	  },
	  year: {
		textAlign: 'center',
	  },
	  
	  listView: {
		  flex:1,
		paddingTop: 15,
		backgroundColor: '#FFF',
		margin:3
	  },
})

AppRegistry.registerComponent('Beginhomecomponent', () => Beginhomecomponent);

module.exports = Beginhomecomponent;