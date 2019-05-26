'use strict';

import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Divider} from 'react-native';
import MainScreenTabContainer from './MainScreenTab';

type Props = {};

export default class MainScreen extends Component<props> {

	constructor(props) {
		super(props);
    let todayDate = new Date();
    this.state = {
      date: todayDate.toDateString(),
    }
	}

	render() {
		return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Image style = {styles.logo} source={require('../img/shareat_logo.png')} />
          <Text style = {styles.date}>
            {this.state.date}
          </Text>
        </View>
        <MainScreenTabContainer />
        <View style = {styles.container}>
          <Text style = {styles.rewardHeader}> 
            REWARDS & PROMOTIONS
          </Text>
          <View style = {styles.divider}/>
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
    flex: .17,
    alignItems: 'center',
  },
  logo: {
  	width: 140,
  	height: 40,
  },
  date: {
    color: 'gray',
    fontSize: 13
  },
  rewardHeader: {
    alignSelf: 'center',
    paddingTop: 80
  },
  divider: {
    borderColor: '#F3A545',
    borderBottomWidth: 2
  }
});