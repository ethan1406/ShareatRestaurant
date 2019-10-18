import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class SplashScreen extends Component<props> {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => {resolve('result')},
        2000
        )
      )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor('#F3A545')
  }

  render() {
    return(
      <View style = {styles.container} >
      <Image style = {styles.logo} source={require('../img/ShareatPOS.png')} />
      <Text style = {styles.header}> "INSERT CATCHY PHRASE HERE" </Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  logo: {
    width: 450,
    height: 80,
  }
});