import React from 'react';
import Login from './Pages/login';
import Signup from './Pages/singup';
import SplashScreen from './Pages/splashscreen';
import {

  Image,

} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Searchpage from './Pages/searchpage';
import Profilepage from './Pages/profilepage';
import Profilelist from './Pages/profilelist';
import Explore from "./Pages/Explore";
export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );

  const Tabstack = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: 'Explore',
          tabBarIcon: () => {
            return   <Image   style={{   
              height: 25,
              width:25,
              resizeMode: 'cover',
            }} source={require('./assets/explore.png')}/>
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Searchpage}
        options={{
          title: 'Search',
          tabBarIcon: () => {
            return   <Image   style={{   
              height: 25,
              width:25,
              resizeMode: 'cover',
            }} source={require('./assets/Searchnavigation.png')}/>
          },
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Profilepage}
        options={{
          title: 'Timeline',
          tabBarIcon: () => {
            return   <Image   style={{   
              height: 25,
              width:25,
              resizeMode: 'cover',
            }} source={require('./assets/timeline.png')}/>
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilelist}
        options={{
          title: 'Profile',
          tabBarIcon: () => {
            return   <Image   style={{   
              height: 25,
              width:25,
              resizeMode: 'cover',
            }} source={require('./assets/profile.jpeg')}/>
          },
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Loginstack"
          component={Loginstack}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="Tabstack"
          component={Tabstack}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
