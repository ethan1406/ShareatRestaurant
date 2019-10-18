import React, {Component} from 'react';
import {createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';
import {baseURL} from '../Constants.js';



class OpenTab extends Component<props>{

	constructor(props) {
		super(props);
		this.state = {
			tableHead: ['Time', 'Table No.', 'Party', 'Special Requests', 'Pre-tip', 'Paid'],
			tableData: [
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				['9:46am', '5', '1', 'High Chair', '$102.84', ''],
				],
		}
	}

	async componentDidMount() {
		try {
			const response = await axios.get(baseURL + 'merchant/getActiveParties');
			this.setState({data: response.data.activeParties});
			console.log(this.state.data);
		} catch (err) {
			console.warn(err);
		}
	}
	render() {
		return(
			<View>
		<Table>
          <Row data={this.state.tableHead} borderStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}} textStyle={styles.text} style={{backgroundColor: '#e5e5e5'}}/>
          <Rows data={this.state.tableData} borderStyle={{borderBottomWidth: 1, borderBottomColor: 'black'}} textStyle={styles.text}/>
        </Table>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	text: {
		fontSize: 25,
		alignSelf: 'center',
	},
});

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