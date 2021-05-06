import React, {useState} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View

} from 'react-native';
import Card from '../components/card';

export default function Explore() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{marginTop: 20}}>
          <Card
            title="Netflix"
            subtitle="A Platform to watch movies"
            rating="3.5"
            image={require('../assets/netflix.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Card
            title="Galleria"
            subtitle="Shopping mall in hyderabad"
            rating="2.8"
            image={require('../assets/galleria.jpeg')}
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

    overflow: 'hidden',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  imageActive: {
    height: 60,
    width: 60,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
    borderColor: 'yellow',
    borderWidth: 1,
  },
  text: {
    color: '#000000',
  },
  textActive: {
    color: '#ffc408',
  },
});
