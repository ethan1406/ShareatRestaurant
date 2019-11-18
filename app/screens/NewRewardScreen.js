import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  SafeAreaView,
  FlatList,
} from 'react-native';
import axios from 'axios'; 
import {baseURL} from '../Constants.js';

export default class RewardsScreen extends Component<props> {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Anthony Davis',
      DATA: [
      {
        id: 1,
        title: 'Lunch Offer',
        offer: 'Green or Black Tea',
        description: 'Free green or black tea with your order',
        time: 'Valid from 11:00am - 3:00pm',
        color: '#f0f043',
      },
      {
        id: 2,
        title: 'Dinner',
        offer: 'Mongolian Soup Base',
        description: '15% off on Mongolian soup base',
        time: 'Valid from April 20 - May 3',
        color: '#48e8e8',
      },
      {
        id: 3,
        title: 'Dinner',
        offer: 'Hokkaido Milk Tea',
        description: '',
        time: 'Valid from April 15 - May 10',
        color: '#fcc179',
      }
      ],
      DATA2: [
      {
        id: 1,
        title: 'Free 10th Drink',
        offer: 'Any Drink',
        description: 'Get ten stamps and your 11th drink is on us',
        time: '',
        color: '#a5edfa',
      },
      {
        id: 2,
        title: '% Discount',
        offer: 'Off Next Order',
        description: 'Percentages are applied after every consecutive visit',
        time: '',
        color: '#faf4a5',
      },
      {
        id: 3,
        title: 'Silver Club',
        offer: 'Green or Black Tea',
        description: 'Free green or black tea per visit',
        time: 'Valid from April 15 - May 10',
        color: '#f08b8b',
      },
      {
        id: 3,
        title: 'Gold Club',
        offer: 'Green or Black Tea',
        description: 'Free green or black tea per visit',
        time: 'Valid from April 15 - May 10',
        color: '#f07ffa',
      },
      {
        id: 3,
        title: 'Platinum Club',
        offer: 'Green or Black Tea',
        description: 'Free green or black tea per visit',
        time: 'Valid from April 15 - May 10',
        color: '#aefcc3',
      }
      ]
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get(baseURL + 'merchant/getRewards');
      this.setState({rewards: response.data.rewards.loyalty_points});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
      <View style = {styles.horizontal}>
      <Image style = {styles.logo} source={require('../img/ShareatPOS2.png')} />
      <Text style = {styles.head}>
      Rewards
      </Text>
      <TouchableOpacity style = {styles.user}
      onPress = {() => this.props.navigation.navigate('Profile')}>
      <Image style = {styles.userIcon} source={require('../img/defaultUserFemale.png')} />
      <Text style = {styles.userName}>
      {this.state.userName}
      </Text>
      </TouchableOpacity>
      </View>
      <View>
      <Text style={styles.section}>
      Current Offers
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={this.state.DATA}
        renderItem={({ item }) => <Item title={item.title} offer={item.offer} description={item.description} time={item.time} color={item.color}/>}
        keyExtractor={item => item.id}
        horizontal={true}
        ListFooterComponent={Add()}
      />
      <Text style={styles.section}>
      Loyalty
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={this.state.DATA2}
        renderItem={({ item }) => <Item title={item.title} offer={item.offer} description={item.description} time={item.time} color={item.color}/>}
        keyExtractor={item => item.id}
        horizontal={true}
        ListFooterComponent={Add()}
      />
      </View>
      </SafeAreaView>
      )
  }
}

function Item({ title, offer, description, time, color}) {
  return (
    <TouchableOpacity style={[styles.item, {borderTopColor: color}]}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.offer}> {offer} </Text>
      <Text style={styles.description}> {description} </Text>
      </View>
      <Text style={styles.time}> {time} </Text>
    </TouchableOpacity>
  );
}

function Add() {
  return (
    <TouchableOpacity style={styles.add}>
    <Image style={styles.img} source={require('../img/add.png')}/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  horizontal: {
    flex: .75,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 25,
    marginTop: 25,
  },
  logo: {
    width: 220,
    height: 35,
  },
  head: {
    color: 'gray',
    fontSize: 30,
    marginRight: 30,
  },
  userName: {
    color: 'gray',
    fontSize: 20,
    marginLeft: 7,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 40,
    height: 40,
  },
  type: {
    fontSize: 28,
    paddingTop: 20,
  },
    item: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 230,
    height: 230,
    borderRadius: 7,
    justifyContent: 'space-between',
    borderTopWidth: 5.5,
  },
  section: {
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    paddingTop: 10,
    marginLeft: -5,
  },
    time: {
    fontSize: 14,
    marginLeft: -5,
  },
  offer: {
    fontSize: 18,
    paddingTop: 10,
    marginLeft: -5,
  },
  offerContainer: {
    marginTop: 20,
    marginBottom: 50,
  },
  add: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 230,
    height: 230,
    borderRadius: 7,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    },
  img: {
    alignSelf: 'center',
    width: 80,
    height: 80,
  }
});