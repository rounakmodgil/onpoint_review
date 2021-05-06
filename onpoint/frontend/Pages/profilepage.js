import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';

import Card from '../components/card';

export default function profilepage() {
  const windowWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{borderColor: '#bbb', borderWidth: 1}}>
          <ImageBackground
            style={{
              height: 250,
              width: '100%',
              resizeMode: 'contain',
            }}
            source={require('../assets/whatsnew.png')}></ImageBackground>
        </View>
        <View style={{height: 40}}>
          <Image
            style={{
              position: 'absolute',
              bottom: 0,
              borderColor: '#CB202D',
              borderWidth: 2,
              left: windowWidth / 2 - 48,
              height: 80,
              width: 80,
              borderRadius: 100,
            resizeMode:"cover"
            }}
            source={require('../assets/user.jpeg')}
          />
        </View>
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
            <View style={{borderColor:"#bbb", justifyContent:"center",  }}>
              <Text style={{fontWeight:"bold"}} >Pombi Nithinsai</Text>
              <Text  >nithinsai263@gmail.com</Text>
              </View>
            <View style={{borderColor:"#bbb", justifyContent:"center", alignItems:"center", }}>
              <Text style={{fontWeight:"bold", color:"#CB202D"}}>0 Posts</Text>
              </View>
          </View>
        <View style={{ flexDirection:"row",justifyContent:"center",marginLeft:60}}>
        <ImageBackground
            style={{
              height: 280,
              width: '54%',
              resizeMode: 'contain',
            
            }}
            source={require('../assets/nothing.png')}></ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight,
    overflow: 'hidden',
  },
});
