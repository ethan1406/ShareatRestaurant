import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import {StyleSheet, Text, View} from 'react-native';

class OpenTab extends Component{
	render() {
		return(
			<View>
				<Text> OpenTab </Text>
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

const MainScreenTabNavigator = createMaterialTopTabNavigator(
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
				tabBarLabel: 'COMPLETED'
			}
		}
	},
	{
		tabBarOptions:{
			activeTintColor: '#F3A545',
			inactiveTintColor: 'grey',
			style: {
				backgroundColor:'white'
			}
		}
	}
)

const MainScreenTabContainer = createAppContainer(MainScreenTabNavigator);

export default MainScreenTabContainer;