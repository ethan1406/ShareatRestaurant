'use strict';

import { createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import LoginScreen from './screens/LoginScreen';
import LandingScreen from './screens/LandingScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RewardsScreen from './screens/RewardsScreen';

const main = createMaterialBottomTabNavigator(
{
  LandingScreen,
  RewardsScreen,
  ProfileScreen
}, {
  initialRouteName: 'LandingScreen',
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
      Settings: {
        screen: SettingsScreen,
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


export default createAppContainer(AppNavigator);