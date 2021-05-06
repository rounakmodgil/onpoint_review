import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';

export default function Profilelist() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.details}>
          <Text style={styles.name}>Nithinsai Pumbi</Text>
          <View style={styles.details2}>
            <Text style={styles.phonenumber}>8686959744</Text>
            <Text style={styles.mail}>janedoe@gmail.com</Text>
          </View>
        </View>
        <Text style={styles.profiletext}>YOUR PROFILE</Text>
        <View style={styles.lists}>
          <View style={styles.listitem}>
            <Image source={require('../assets/search.png')} />
            <Text style={styles.listtext}>Edit Profile</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require('../assets/search.png')} />
            <Text style={styles.listtext}>Notifications</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require('../assets/search.png')} />
            <Text style={styles.listtext}>About</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require('../assets/search.png')} />
            <Text style={styles.listtext}>Send Feedback</Text>
          </View>
          <View style={styles.listitem}>
            <Image source={require('../assets/search.png')} />
            <Text style={styles.listtext}>Rate us on Play Store</Text>
          </View>
          <Text style={styles.logout}>Log Out</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    overflow: 'hidden',
    alignContent: 'center',
    //alignItems:"center",
    paddingHorizontal:5


  },
  details: {
    paddingBottom: 25,
    marginTop: 10,
    borderBottomColor: '#838383',
    borderBottomWidth: 0.5,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details2: {
    flexDirection: 'row',
    marginTop: 20,
  },
  phonenumber: {
    flex: 1,
  },
  mail: {
    flex: 2,
  },

  profiletext: {
    marginTop: 20,
    color: '#575757',
  },
  lists: {
    paddingTop: 15,
    paddingBottom: 15,

    borderBottomColor: '#838383',
  },
  lists2: {
    paddingTop: 15,
  },

  listitem: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  listtext: {
    marginLeft: 10,
  },

  listtext2: {
    color: '#7C1C00',
    marginLeft: 10,
  },

  logout: {
    color: '#960000',
    fontWeight: 'bold',
    marginLeft: 30,
  },
});
