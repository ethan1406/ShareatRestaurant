'use strict';

import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Divider,
  StatusBar} from 'react-native';
  import LandingScreenTabContainer from './LandingScreenTab';

  type Props = {};

  export default class LandingScreen extends Component<props> {

   constructor(props) {
    super(props);
    let todayDate = new Date();
    this.state = {
      date: todayDate.toDateString(),
      restaurantName: 'Qin West',
      userName: 'Anthony Davis'
    }
  }



  render() {
    return (
      <View style = {styles.container}>
      <View style = {styles.horizontal}>
      <Image style = {styles.logo} source={require('../img/ShareatPOS.png')} />
      <Text style = {styles.restaurantHeader}>
      {this.state.restaurantName}
      </Text>
      <TouchableOpacity style = {styles.user}
      onPress = {() => this.props.navigation.navigate('Profile')}>
      <Image style = {styles.userIcon} source={require('../img/defaultUserFemale.png')} />
      <Text style = {styles.restaurantHeader}>
      {this.state.userName}
      </Text>
      </TouchableOpacity>
      </View>
      <Text style = {styles.date}>
      {this.state.date}
      </Text>
      <LandingScreenTabContainer />
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
  horizontal: {
    flex: .18,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 20,
  },
  logo: {
  	width: 220,
  	height: 35,
  },
  date: {
    color: 'gray',
    fontSize: 22,
    alignSelf: 'center',
  },
  restaurantHeader: {
    color: 'gray',
    fontSize: 28,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
  }
});