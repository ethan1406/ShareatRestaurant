'use strict';

import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Divider} from 'react-native';
import LandingScreenTabContainer from './LandingScreenTab';

type Props = {};

export default class LandingScreen extends Component<props> {

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
          <Image style = {styles.logo} source={require('../img/ShareatPOS.png')} />
          <Text style = {styles.date}>
            {this.state.date}
          </Text>
        </View>
        <LandingScreenTabContainer />
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
    flex: .35,
    alignItems: 'center',
  },
  logo: {
  	width: 450,
  	height: 80,
  },
  date: {
    color: 'gray',
    fontSize: 20
  },
  rewardHeader: {
    alignSelf: 'center',
    paddingTop: 130,
    fontSize: 20
  },
  divider: {
    borderColor: '#F3A545',
    borderBottomWidth: 3
  }
});

