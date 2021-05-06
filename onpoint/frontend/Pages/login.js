import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import {Formik} from 'formik';
import {login} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';
import {setAccessToken} from './accessToke';
import AsyncStorage from '@react-native-community/async-storage';

import logo from "../assets/onpointlogo2.png";

export default function Signup({navigation}) {
  const [userlogin] = useMutation(login);
  return (
    <View style={styles.logincontainer}>
      <View style={{width:"100%",alignItems:"center", marginTop:-70, marginBottom:70}}>
      <Image style={{height:75, width:225,  }} source={logo}/>
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={async values => {
          const res = await userlogin({
            variables: {email: values.email, password: values.password},
          });
          if (res) {
            setAccessToken(res.data.login.accessToken);
            AsyncStorage.setItem('user_id', res.data.login.user.id);
            navigation.replace('Tabstack');
          }
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              style={styles.logintextinput}
              required
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="email"
              textContentType="emailAddress"
              value={values.email}
            />
            <TextInput
              style={styles.logintextinput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="password"
              textContentType="password"
              value={values.password}
            />
            <View style={styles.loginbuttoncontainer}>
              <Button  color="#CB202D" onPress={handleSubmit} title="Login" />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('signup')}>
              <View style={styles.loginnewuser}>
                <Text> New User? Please Signup</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  logincontainer: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
  },
  logintextinput: {
    margin: 10,
    width: 380,
    backgroundColor: '#E0E5EB',
  },
  loginbuttoncontainer: {
    width: 380,
    margin: 10,
  },
  loginnewuser: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
