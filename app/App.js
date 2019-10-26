'use strict';

import { createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import TableScreen from './screens/TableScreen';



const AppNavigator = createStackNavigator(
  {
    Registration: createStackNavigator({
      Login: {
        screen: LoginScreen
      }
    }),
    Table: TableScreen
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