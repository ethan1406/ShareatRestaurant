import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView
} from 'react-native';

export default class SettingsScreen extends Component<props> {

  constructor(props){
    super(props);
    this.state = {
      restaurantName: 'Qin West',
      email: 'qinwest@gmail.com',
    }
  }
  render() {
    return(
      <ScrollView resizeMode='contain' contentContainerStyle={styles.container}>
      <Text style={styles.restaurantName}> {this.state.restaurantName} </Text>
      <View style={styles.emailContainer}>
      <Image style={styles.emailIcon} source={require('../img/email.png')} />
      <Text style={styles.emailText}> {this.state.email} </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile')} color='#000000'>
      <Text style={styles.buttonText}> Edit Profile </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Login')} color='#000000'>
      <Text style={styles.buttonText}> Sign Out </Text>
      </TouchableOpacity>
      <View style={{marginVertical: 40}}></View>
      <TouchableOpacity style={styles.settingContainer} onPress={()=> {}} color='#000000'>
      <Image style={styles.settingImage} source={require('../img/statistics.png')} />
      <Text style = {styles.settingText}> Statistics </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingContainer} onPress={()=> {}} color='#000000'>
      <Image style={styles.optionImage} source={require('../img/payment.png')} />
      <Text style = {styles.settingText}> Payment </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingContainer} onPress={()=> {}} color='#000000'>
      <Image style={styles.optionImage} source={require('../img/notification.png')} />
      <Text style = {styles.settingText}> Notification </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingContainer} onPress={()=> {}} color='#000000'>
      <Image style={styles.settingImage} source={require('../img/privacy.png')} />
      <Text style = {styles.settingText}> Privacy & Security </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingContainer} onPress={()=> {}} color='#000000'>
      <Image style={styles.settingImage} source={require('../img/receipt.png')} />
      <Text style = {styles.settingText}> Send Feedback </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingContainer} onPress={()=> {}} color='#000000'>
      <Image style={styles.optionImage} source={require('../img/about.png')} />
      <Text style = {styles.settingText}> About </Text>
      </TouchableOpacity>
      </ScrollView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex:1, 
    justifyContent: 'flex-start', 
    alignItems: 'center'
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 25,
    marginBottom: 10
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center'
  },
  emailIcon: {
    tintColor: 'black', 
    marginHorizontal: 15, 
    height: 30, 
    width: 30
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 5,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    width: '60%',
    height: 35,
    backgroundColor: '#F3A545',
    borderRadius: 2,
    alignItems: 'center',
  },
  buttonText: {
    color:'white',
    textAlign:'center',
    paddingTop: 3,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 60,
    borderColor: 'grey',
    borderWidth: 0.5
  },
  settingeImage: {
    tintColor: 'black', 
    marginHorizontal: 15, 
    height: 25, 
    width: 25
  },
  settingText: {
    fontSize: 30,
  }
});