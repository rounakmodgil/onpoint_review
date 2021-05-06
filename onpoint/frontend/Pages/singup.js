import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Image
} from 'react-native';
import {Formik} from 'formik';
import {register} from '../Graphql/gql';
import {useMutation} from '@apollo/react-hooks';

import logo from "../assets/onpointlogo2.png";
export default function Signup({navigation}) {
  const [usercreate, res] = useMutation(register);
  return (
    <View style={styles.signupcontainer}>
      <View style={{width:"100%",alignItems:"center", marginTop:-50, marginBottom:50}}>
      <Image style={{height:75, width:225,  }} source={logo}/>
      </View>
      <Formik
        initialValues={{name: '', email: '', password: '', phone: ''}}
        onSubmit={async values => {
          await usercreate({
            variables: {
              name: values.name,
              phone: values.phone,
              email: values.email,
              password: values.password,
            },
          });

          if (res) navigation.navigate('login');
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              style={styles.signuptextinput}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Name"
              textContentType="name"
              value={values.name}
            />
            <TextInput
              style={styles.signuptextinput}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              placeholder="Phone Number"
              textContentType="phone"
              value={values.phone}
            />
            <TextInput
              style={styles.signuptextinput}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="Email"
              textContentType="emailAddress"
              value={values.email}
            />
            <TextInput
              style={styles.signuptextinput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Password"
              textContentType="password"
              value={values.password}
            />
            <View style={styles.signupbuttoncontainer}>
              <Button color="#CB202D" onPress={handleSubmit} title="Signup" />
            </View>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('login')}>
              <View style={styles.signupnewuser}>
                <Text>Already a user? please login</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
  },
  signuptextinput: {
    margin: 10,
    width: 380,
    backgroundColor: '#E0E5EB',
  },
  signupbuttoncontainer: {
    width: 380,
    margin: 10,
  },
  signupnewuser: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
