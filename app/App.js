'use strict';

import { createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

const AppNavigator = createStackNavigator(
  {
    Registration: createStackNavigator({
      Login: {
        screen: LoginScreen
      },
      Main: {
        screen: MainScreen,
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