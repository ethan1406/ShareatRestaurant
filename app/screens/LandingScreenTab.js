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
          <Row data={this.state.tableHead} textStyle={styles.text} style={styles.topRow}/>
          <Rows data={this.state.tableData} textStyle={styles.text} style={styles.rows}/>
        </Table>
			</View>
			)
	}
}

class CompletedTab extends Component{
	constructor(props) {
		super(props);
		this.state = {
			tableHead: ['Time', 'Table No.', 'Party', 'Special Requests', 'Pre-tip', 'Paid'],
			tableData: [
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
				['9:46am', '5', '1', 'High Chair', '$102.84', 'Yes'],
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
          <Row data={this.state.tableHead} textStyle={styles.text} style={styles.topRow}/>
          <Rows data={this.state.tableData} textStyle={styles.text} style={styles.rows}/>
        </Table>
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
		activeTintColor: '#ffa91f',
		inactiveTintColor: 'grey',
		labelStyle:{
			fontSize: 18
		},
		style: {
			backgroundColor:'white'
		}
	}
}
)


const styles = StyleSheet.create({
	text: {
		fontSize: 17,
		alignSelf: 'center',
		marginBottom: 18,
		marginTop: 18,
		color: '#888888'
	},
	topRow: {
		marginTop: 5,
		backgroundColor: '#F8F8F8',
		borderBottomColor: '#E8E8E8',
		borderBottomWidth: 1,
	},
	rows: {
		borderBottomColor: '#E8E8E8',
		borderBottomWidth: 1,
	},
});

const LandingScreenTabContainer = createAppContainer(LandingScreenTabNavigator);

export default LandingScreenTabContainer;