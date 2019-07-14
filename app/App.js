'use strict';

import React, {Component} from 'react';
import { createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RewardsScreen from './screens/RewardsScreen';
import SplashScreen from './screens/SplashScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';


const main = createMaterialBottomTabNavigator(
{
  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? 'profile' : 'profile'}
              size={25}
              style={{ color: focused? '#F3A545' : tintColor }}
            />
          ),
        }
  },

  RewardsScreen: {
    screen: RewardsScreen,
    navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? 'gift' : 'gift'}
              size={25}
              style={{ color: focused? '#F3A545' : tintColor }}
            />
          ),
        }
  },

  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
          tabBarLabel: null,
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? 'setting' : 'setting'}
              size={25}
              style={{ color: focused? '#F3A545' : tintColor }}
            />
          ),
        }
  }
}, {
  initialRouteName: 'LandingScreen',
  labeled: false,
  activeColor: '#F3A545',
  inactiveColor: 'black',
  barStyle: {backgroundColor: 'white'},
  navigationOptions: {
    header: null,
  }
});

const AppNavigator = createStackNavigator(
  {
    Registration: createStackNavigator({
      Login: {
        screen: LoginScreen
      },
      LandingScreen: {
        screen: LandingScreen,
        navigationOptions: {
          header: null,
        }
      },
      Main: main,
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          header: null,
        }
      }
    })
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null,
    },
    mode: 'modal',
  }

);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});


export default createAppContainer(InitialNavigator);