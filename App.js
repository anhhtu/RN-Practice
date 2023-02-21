import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './Login';
import SearchScreen from './SearchScreen';
import ProductDetail from './ProductDetail';
import Tab from './Tab';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}} headerShown='none' initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Tab" component={Tab}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
