import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

export default class SettingsScreen extends Component<props> {
  render() {
    return(
      <View style = {styles.container} >
        <Text style = {styles.header}> SETTINGS </Text>
        <Button
          onPress = {() => this.props.navigation.navigate('Profile')}
          title = "PROFILE"
          color = 'grey' />
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
  }
});