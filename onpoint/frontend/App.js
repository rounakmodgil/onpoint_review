





//----------------------------------------image picker--------------------------------------------------------
// import React,{useState, useRef} from 'react'
// import { View, StyleSheet, Text, ScrollView, Button,  Picker, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native";
// import {Formik} from 'formik';
// import RBSheet from "react-native-raw-bottom-sheet";
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// const App = () => {
  
// const uploadfromlib=()=>{
//   let options = {
//     title: 'Select Image',
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };
  
//   launchImageLibrary(options, (response) => { 
//     console.log('Response = ', response);
  
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//     } else {
//       const source = { uri: response.uri };
//       console.log(source)
//     }
//   });
// }
// const uploadfromcamera=()=>{
//   let options = {
//     title: 'Select Image',
//     storageOptions: {
//       skipBackup: true,
//       path: 'images',
//     },
//   };
  
//   launchCamera(options, (response) => { 
//     console.log('Response = ', response);
  
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('ImagePicker Error: ', response.error);
//     } else if (response.customButton) {
//       console.log('User tapped custom button: ', response.customButton);
//     } else {
//       const source = { uri: response.uri };
//       console.log(source)
//     }
//   });
// }
// const [selectedValue, setSelectedValue] = useState("Oxygen Cylinde");
// const refRBSheet = useRef();

// return (
//   <View >  
   
//     <ScrollView>

// <View style={styles.logincontainer}>
//     <Text>Please Help us with any legit information</Text>
//   <Formik
//     initialValues={{email: '', description: ''}}
//     onSubmit={async (values) => {
//      ()=>console.log(values)
//     }}>
//     {({handleChange, handleBlur, handleSubmit, values}) => (
//       <View>
//           <View style={{flexDirection:"row", justifyContent:"center"}}>
         
//           <Picker
//       selectedValue={selectedValue}
//       style={{ height: 50, width: 150 }}
//       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//     >
//       <Picker.Item label="Oxygen Cylinder" value="oxygen_cylinder" />
//       <Picker.Item label="Plasma" value="plasma" />
//       <Picker.Item label="Normal Beds" value="normal_beds" />
//       <Picker.Item label="ICU Beds" value="icu_beds" />
//       <Picker.Item label="Remdesivir" value="remdesivir" />
//       <Picker.Item label="FabiFlu" value="fabiflu" />
//       <Picker.Item label="Ventilator" value="ventilator" />
//     </Picker></View>
//     <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
//     <View style={styles.uploadphoto}><Text>weee</Text></View></TouchableWithoutFeedback>
//         <TextInput
//         style={styles.logintextinput}
//           onChangeText={handleChange('description')}
//           onBlur={handleBlur('description')}
//           placeholder="Add a Description"
//           textContentType="text"
//           value={values.description}
//         />
        
//         <View style={styles.loginbuttoncontainer}>
//         <Button title="Post" />   
//         </View>
       
//       </View>
//     )}
//   </Formik>
//   </View>
// <RBSheet
// ref={refRBSheet}
// closeOnDragDown={true}
// closeOnPressMask={true}
// customStyles={{
// wrapper: {
//   backgroundColor: "transparent"
// },
// draggableIcon: {
//   backgroundColor: "#000"
// }
// }}
// >
// <View>
// <TouchableWithoutFeedback onPress={uploadfromlib}>
// <View style={{flexDirection:"row", padding:10}}><Text>Upload from Gallery</Text></View>
// </TouchableWithoutFeedback>
// <TouchableNativeFeedback onPress={uploadfromcamera}>
// <View style={{flexDirection:"row", padding:10}}><Text>Take a photo</Text></View>
// </TouchableNativeFeedback>
// <View style={{flexDirection:"row", padding:10}}><Text>Cancel</Text></View>
// </View>
// </RBSheet> 
// </ScrollView>
//   </View>
// );
// }
// const styles = StyleSheet.create({
//   logincontainer:{
//     flex:1,
//     justifyContent:'center',
//   },
//   logintextinput:{
//      margin:10,
//      width:380, 
//      backgroundColor:'#E0E5EB'
//   },
//   loginbuttoncontainer:{
//     width:380,
//     margin:10
//   },
//   loginnewuser:{
//     flexDirection:"row", 
//     justifyContent:'center'
//   },
//   uploadphoto:{
//     width:"100%",
//     height:400,
//     backgroundColor:"gray"
//   }
// });

// export default App


//----------------------------------------crop image picker--------------------------------------------------------


// import React,{useState, useRef} from 'react'
// import { View, StyleSheet, Text, ScrollView, Button,  Picker, TextInput, TouchableWithoutFeedback, TouchableNativeFeedback } from "react-native";
// import {Formik} from 'formik';
// import RBSheet from "react-native-raw-bottom-sheet";
// import ImagePicker from 'react-native-image-crop-picker';
// const App = () => {
  
// const uploadfromlib=()=>{
//   ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     cropping: true
//   }).then(image => {
//     console.log(image);
//   });
// }
// const uploadfromcamera=()=>{
//   ImagePicker.openCamera({
//     width: 300,
//     height: 400,
//     cropping: true,
//   }).then(image => {
//     console.log(image);
//   });
// }
// const [selectedValue, setSelectedValue] = useState("Oxygen Cylinde");
// const refRBSheet = useRef();

// return (
//   <View >  
   
//     <ScrollView>

// <View style={styles.logincontainer}>
//     <Text>Please Help us with any legit information</Text>
//   <Formik
//     initialValues={{email: '', description: ''}}
//     onSubmit={async (values) => {
//      ()=>console.log(values)
//     }}>
//     {({handleChange, handleBlur, handleSubmit, values}) => (
//       <View>
//           <View style={{flexDirection:"row", justifyContent:"center"}}>
         
//           <Picker
//       selectedValue={selectedValue}
//       style={{ height: 50, width: 150 }}
//       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//     >
//       <Picker.Item label="Oxygen Cylinder" value="oxygen_cylinder" />
//       <Picker.Item label="Plasma" value="plasma" />
//       <Picker.Item label="Normal Beds" value="normal_beds" />
//       <Picker.Item label="ICU Beds" value="icu_beds" />
//       <Picker.Item label="Remdesivir" value="remdesivir" />
//       <Picker.Item label="FabiFlu" value="fabiflu" />
//       <Picker.Item label="Ventilator" value="ventilator" />
//     </Picker></View>
//     <TouchableWithoutFeedback onPress={() => refRBSheet.current.open()}>
//     <View style={styles.uploadphoto}><Text>weee</Text></View></TouchableWithoutFeedback>
//         <TextInput
//         style={styles.logintextinput}
//           onChangeText={handleChange('description')}
//           onBlur={handleBlur('description')}
//           placeholder="Add a Description"
//           textContentType="text"
//           value={values.description}
//         />
        
//         <View style={styles.loginbuttoncontainer}>
//         <Button title="Post" />   
//         </View>
       
//       </View>
//     )}
//   </Formik>
//   </View>
// <RBSheet
// ref={refRBSheet}
// closeOnDragDown={true}
// closeOnPressMask={true}
// customStyles={{
// wrapper: {
//   backgroundColor: "transparent"
// },
// draggableIcon: {
//   backgroundColor: "#000"
// }
// }}
// >
// <View>
// <TouchableWithoutFeedback onPress={uploadfromlib}>
// <View style={{flexDirection:"row", padding:10}}><Text>Upload from Gallery</Text></View>
// </TouchableWithoutFeedback>
// <TouchableNativeFeedback onPress={uploadfromcamera}>
// <View style={{flexDirection:"row", padding:10}}><Text>Take a photo</Text></View>
// </TouchableNativeFeedback>
// <View style={{flexDirection:"row", padding:10}}><Text>Cancel</Text></View>
// </View>
// </RBSheet> 
// </ScrollView>
//   </View>
// );
// }
// const styles = StyleSheet.create({
//   logincontainer:{
//     flex:1,
//     justifyContent:'center',
//   },
//   logintextinput:{
//      margin:10,
//      width:380, 
//      backgroundColor:'#E0E5EB'
//   },
//   loginbuttoncontainer:{
//     width:380,
//     margin:10
//   },
//   loginnewuser:{
//     flexDirection:"row", 
//     justifyContent:'center'
//   },
//   uploadphoto:{
//     width:"100%",
//     height:400,
//     backgroundColor:"gray"
//   }
// });

// export default App



import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import Routes from './Routes';
import {setAccessToken} from './Pages/accessToke';

export default function App() {
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    fetch('http://10.0.2.2:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    })
      .then(async (x) => {
        const {accessToken} = await x.json();
        setAccessToken(accessToken);
        Setloading(false);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
      });
  });
  return (
    <>
      {loading && <Text>loading...</Text>}
      {!loading && <Routes />}
    </>
  );
}



