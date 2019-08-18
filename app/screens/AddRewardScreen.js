import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {baseURL} from '../Constants';
import qs from 'qs';

export default class AddRewardScreen extends Component<props> {

  constructor(props) {
    super(props);
    this.state = { 
      rewardType: '',
      rewardTitle: '',
      pointsRequired: '',
    };
  }


  _add = async () => {
    axios({
      method: 'post',
      url: baseURL + 'merchant/addReward',
      data: qs.stringify({rewardType: this.state.rewardType, rewardTitle: this.state.rewardTitle, pointsRequired: this.state.pointsRequired}),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      }
    })
    this.props.navigation.navigate('Main');
  }
  render() {
    return(
      <View style = {styles.container} >
      <Text style = {styles.header}> Add A Reward </Text>
      <TextInput style={styles.textInput} multiline={false} placeholder='Reward Type' 
      onChangeText={(rewardType) => this.setState({rewardType})}/>
      <TextInput style={styles.textInput} multiline={false} placeholder='Reward Title'
      onChangeText={(rewardTitle) => this.setState({rewardTitle})}/>
      <TextInput style={styles.textInput} multiline={false} placeholder='Points Required'
      onChangeText={(pointsRequired) => this.setState({pointsRequired})}/>
      <TouchableOpacity style={styles.button} onPress={()=> {this._add();}} color='#000000'>
      <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
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
    alignItems: 'center'
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  textInput: {
    height: 50, 
    width: '83%',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    color: 'gray',
    fontSize: 15,
  },
  button: {
    marginTop: 10,
    marginBottom:0 ,
    width: '100%',
    height: 40,
    backgroundColor: '#ffa91f',
    alignItems: 'center',
  },
});