import React from 'react';
import Login from './Pages/login';
import Signup from './Pages/singup';
import SplashScreen from './Pages/splashscreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Searchpage from './Pages/searchpage';
import Profilepage from './Pages/profilepage';
import Profilelist from './Pages/profilelist';
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
        component={Searchpage}
        options={{
          title: 'Explore',
        }}
      />
      <Tab.Screen
        name="Timeline"
        component={Profilepage}
        options={{
          title: 'Timeline',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profilelist}
        options={{
          title: 'Profile',
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
