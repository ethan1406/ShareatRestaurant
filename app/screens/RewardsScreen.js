import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  FlatList,
  ScrollView,
  Alert
} from 'react-native';
import { ListItem } from 'react-native-elements'
import axios from 'axios'; 
import {baseURL} from '../Constants.js';

export default class RewardsScreen extends Component<props> {

  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(baseURL + 'merchant/getRewards');
      this.setState({info: response.data.rewards.loyalty_points});
      //console.log(this.state.data);
    } catch (err) {
      console.log(err);
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
      data = {this.state.info}
      keyExtractor={(item, index) => index.toString()}
      renderItem = {( { item }) => (
        <TouchableOpacity style = {styles.rewardTouchable}
        onPress={() => {
          Alert.alert(
            'Delete Reward?',
            'This reward will no longer be available on the user app.',
            [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            
            {text: 'Yes', onPress: async () => 
            {
              axios.delete(baseURL + 'merchant/deleteReward',
                {params: {rewardId: item._id}});
              var res = await axios.get(baseURL + 'merchant/getRewards');
              this.setState({info: res.data.rewards.loyalty_points});
            }
          },
          ],

          {cancelable: false},
          );
        }} >
        <Text  style = {styles.rewardText} > {item.reward}, {item.pointsRequired}  Points </Text>
        </TouchableOpacity>
        )}
      />
      <TouchableOpacity style = {styles.rewardTouchable} onPress={()=> this.props.navigation.navigate('AddReward')}>
      <Text  style = {styles.rewardText} > Add Reward... </Text>
      <Button onPress={() => {this.componentDidMount();}} title='Refresh' />
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