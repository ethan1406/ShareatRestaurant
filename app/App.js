'use strict';

import React, {Component} from 'react';
import { createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import {StatusBar} from 'react-native';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RewardsScreen from './screens/NewRewardScreen';
import SplashScreen from './screens/SplashScreen';
import AddRewardScreen from './screens/AddRewardScreen';
import AboutScreen from './screens/AboutScreen';
import FeedbackScreen from './screens/FeedbackScreen';
import NotificationScreen from './screens/NotificationScreen';
import PaymentScreen from './screens/PaymentScreen';
import PrivacySecurityScreen from './screens/PrivacySecurityScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

StatusBar.setBarStyle( 'light-content',true)
StatusBar.setBackgroundColor('#ffa91f')

const main = createBottomTabNavigator(
{
  LandingScreen: {
    screen: LandingScreen,
    navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? 'profile' : 'profile'}
              size={35}
              style={{ color: focused? '#F3A545' : tintColor }}
            />
          ),
        }
  },

  RewardsScreen: {
    screen: RewardsScreen,
    navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? 'gift' : 'gift'}
              size={35}
              style={{ color: focused? '#ffa91f' : tintColor }}
            />
          ),
        }
  },

  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
          tabBarIcon: ({ tintColor, focused }) => (
            <AntDesign
              name={focused ? 'setting' : 'setting'}
              size={35}
              style={{ color: focused? '#ffa91f' : tintColor }}
            />
          ),
        }
  }
}, {
  initialRouteName: 'LandingScreen',
  activeColor: '#ffa91f',
  inactiveColor: 'black',
  barStyle: {backgroundColor: 'white'},
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    showLabel: false,
  },
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
      },
      AddReward: {
        screen: AddRewardScreen,
        navigationOptions: {
          header: null,
        }
      },
      Statistics: {
        screen: StatisticsScreen,
          navigationOptions: {
          header: null,
        }
      },
      Payment: {
        screen: PaymentScreen,
        navigationOptions: {
          header: null,
        }
      },
      Notification: {
        screen: NotificationScreen,
        navigationOptions: {
          header: null,
        }
      },
      PrivacySecurity: {
        screen: PrivacySecurityScreen,
        navigationOptions: {
          header: null,
        }
      },
      Feedback: {
        screen: FeedbackScreen,
        navigationOptions: {
          header: null,
        }
      },
      About: {
        screen: AboutScreen,
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