import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'axios'; 
import {baseURL} from '../Constants.js';

export default class RewardsScreen extends Component<props> {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(baseURL + 'merchant/getRewards');
      this.setState({data: response.data.rewards.loyalty_points});
      console.log(this.state.data);
    } catch (err) {
      console.warn(err);
    }
  }



  render() {
    return(
      <View style = {styles.container} >
        <Text style = {styles.header}> REWARDS </Text>
        <View style = {styles.rewardContainer} >
          <Text style = {styles.rewardText}>
          Reward Description                                              Points Required
          </Text>
          <View style={{marginVertical: 10}}></View>
          <FlatList
          data = {this.state.data}
          renderItem = {( { item }) => (
            <TouchableOpacity style = {styles.rewardTouchable} >
            <Text  style = {styles.rewardText} > {item.reward}, {item.pointsRequired} Points </Text>
            </TouchableOpacity>
            )}
          />
          <TouchableOpacity style = {styles.rewardTouchable} >
            <Text  style = {styles.rewardText} > Add Reward... </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  rewardContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'space-between',
  },
  rewardText: {
    fontSize: 30,
  },
  rewardTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});