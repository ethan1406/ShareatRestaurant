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


export default class RewardsScreen extends Component<props> {

  constructor(props) {
    super(props);
    this.state = {
      data: [
      {
        title: 'Free Drink on 10th Purchase',
        timeLeft: '35 minutes',
        timesRedeemed: '34'
      },

      {
        title: 'Buy One Get One Free Green Tea',
        timeLeft: '5 hours',
        timesRedeemed: '50'
      },

      {
        title: '10% Off',
        timeLeft: '72 hours',
        timesRedeemed: '78'
      },

      {
        title: 'Spin the Wheel',
        timeLeft: '50 minutes',
        timesRedeemed: '983'
      },

      {
        title: 'Add More...'
      }
    ]
    }
  }



  render() {
    return(
      <View style = {styles.container} >
        <Text style = {styles.header}> REWARDS </Text>
        <View style = {styles.rewardContainer} >
          <Text style = {styles.rewardText}>
          Reward Description                                              Time left                                         Times Redeemed
          </Text>
          <FlatList
          data = {this.state.data}
          renderItem = {( { item }) => (
            <TouchableOpacity style = {styles.rewardTouchable} >
            <Text  style = {styles.rewardText} > {item.title} </Text>
            <Text  style = {styles.rewardText} > {item.timeLeft} </Text>
            <Text  style = {styles.rewardText} > {item.timesRedeemed} </Text>
            </TouchableOpacity>
            )}
          />
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
    justifyContent:'space-between'
  },
  rewardText: {
    fontSize: 30,
  },
  rewardTouchable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
});