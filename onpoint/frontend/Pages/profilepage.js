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
            source={require('../assets/bino.jpg')}></ImageBackground>
        </View>
        <View style={{height: 48}}>
          <Image
            style={{
              position: 'absolute',
              bottom: 0,
              borderColor: '#CB202D',
              borderWidth: 2,
              left: windowWidth / 2 - 48,
              height: 96,
              width: 96,
              borderRadius: 100,
            }}
            source={require('../assets/netflix.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Card
            title="Netflix"
            subtitle="A Platform to watch movies"
            rating="3.5"
            image={require('../assets/netflix.png')}
          />
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
