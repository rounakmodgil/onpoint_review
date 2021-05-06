import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

export default function searchpage() {
  const [physicalWorld, setPhysicalWorld] = useState(false);
  const [virtualWorld, setVirtualWorld] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [products, setProducts] = useState(false);
  const [automobile, setAutomobile] = useState(false);
  const [services, setServices] = useState(false);
  const [more, setMore] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginLeft: 10, marginRight:10,padding: 5}}>
          <Image
            style={{
              width: '100%',
              marginBottom: 20,
              height: 200,
              resizeMode: 'cover',
            }}
            source={require('../assets/search.jpg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.4,
            borderColor: '#000',
            borderRadius: 50,
            width: '95%',
            alignItems: 'center',
            margin: 10,
            marginBottom: 20,
          }}>
          <Image
            source={require('../assets/search.png')}
            style={{marginLeft: 10, marginRight: 2}}
          />
          <TextInput style={{flex: 1}}></TextInput>
        </View>
        <View style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
            <View style={{borderColor:"#bbb",width:"49%",height:50, justifyContent:"center", alignItems:"center", borderWidth:1, borderRadius:7, backgroundColor:"#CB202D" }}><Text style={{color:"#fff"}}>Virtual World</Text></View>
            <View style={{borderColor:"#bbb",width:"49%",height:50, justifyContent:"center", alignItems:"center", borderWidth:1, borderRadius:7 }}><Text>Physical World</Text></View>
          </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setVirtualWorld(false);
              setPhysicalWorld(!physicalWorld);
              setEntertainment(false);
              setProducts(false);
              setAutomobile(false);
              setServices(false);
              setMore(false);
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/product.png')}
                style={physicalWorld ? styles.imageActive : styles.image}
              />
              <Text style={physicalWorld ? styles.textActive : styles.text}>
                Products
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVirtualWorld(!virtualWorld);
              setPhysicalWorld(false);
              setEntertainment(false);
              setProducts(false);
              setAutomobile(false);
              setServices(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/service.jpeg')}
                style={virtualWorld ? styles.imageActive : styles.image}
              />
              <Text style={virtualWorld ? styles.textActive : styles.text}>
                Services
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVirtualWorld(false);
              setPhysicalWorld(false);
              setEntertainment(!entertainment);
              setProducts(false);
              setAutomobile(false);
              setServices(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/entertainment.png')}
                style={entertainment ? styles.imageActive : styles.image}
              />
              <Text style={entertainment ? styles.textActive : styles.text}>
                Entertainment
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVirtualWorld(false);
              setPhysicalWorld(false);
              setEntertainment(false);
              setProducts(!products);
              setAutomobile(false);
              setServices(false);
              setMore(false);
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/more.png')}
                style={products ? styles.imageActive : styles.image}
              />
              <Text style={products ? styles.textActive : styles.text}>
                More
              </Text>
            </View>
          </TouchableOpacity>
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
    height: 40,
    width: 40,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 5,
  },
  imageActive: {
    height: 40,
    width: 40,
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
    color: '#CB202D',
  },
});
