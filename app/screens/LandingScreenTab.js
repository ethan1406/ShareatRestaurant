import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import axios from 'axios';
import {baseURL} from '../Constants.js';



class OpenTab extends Component<props>{

	constructor(props) {
		super(props);
		this.state = {
			data: [],
		}
	}

	async componentDidMount() {
		try {
			const response = await axios.get(baseURL + 'merchant/getActiveParties');
			this.setState({data: response.data.activeParties});
			//console.log(this.state.data);
		} catch (err) {
			console.warn(err);
		}
	}
	render() {
		return(
			<View>
				<Text style = {{fontSize: 50}}> Table #      Order Total </Text>
				<FlatList
				data = {this.state.data}
				renderItem = {( { item }) => (
					<Text  style = {{fontSize: 50}} >        {item.tableNumber}               ${item.orderTotal}</Text>)}
				/>
			</View>
		)
	}
}

class CompletedTab extends Component{
	render() {
		return(
			<View>
				<Text> CompletedTab </Text>
			</View>
		)
	}
}

const LandingScreenTabNavigator = createMaterialTopTabNavigator(
	{
		OpenTab: {
			screen: OpenTab,
			navigationOptions:{
				tabBarLabel: 'OPEN',
			}
		},
		CompletedTab: {
			screen: CompletedTab,
			navigationOptions: {
				tabBarLabel: 'COMPLETED',
			}
		}
	},
	{
		tabBarOptions:{
			activeTintColor: '#F3A545',
			inactiveTintColor: 'grey',
			labelStyle:{
				fontSize: 20
			},
			style: {
				backgroundColor:'white'
			}
		}
	}
)

const LandingScreenTabContainer = createAppContainer(LandingScreenTabNavigator);

export default LandingScreenTabContainer;