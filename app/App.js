'use strict';

import { createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';



const AppNavigator = createStackNavigator(
  {
    Registration: createStackNavigator({
      Login: {
        screen: LoginScreen
      }
    })
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null
    },
    mode: 'modal',
  }
);

export default createAppContainer(AppNavigator);