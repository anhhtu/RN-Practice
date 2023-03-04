import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './Login';
import SearchScreen from './SearchScreen';
import ProductDetail from './ProductDetail';
import Tab from './Tab';
import ChatScreen from './Chat/ChatScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}} headerShown='none' initialRouteName="ChatScreen">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Tab" component={Tab}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
