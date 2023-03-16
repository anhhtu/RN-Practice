import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './Login';
import SearchScreen from './SearchScreen';
import ProductDetail from './ProductDetail';
import Tab from './Tab';
import ConversationList from './Chat/ConversationList';
import ChatScreen from './Chat/ChatScreen';
import Map from './Map';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} headerShown='none' initialRouteName="MapScreen">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Tab" component={Tab}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen}/>
        <Stack.Screen name='ProductDetail' component={ProductDetail}/>
        <Stack.Screen name='Conversationlist' component={ConversationList}/>
        <Stack.Screen name='ChatScreen' component={ChatScreen}/>
        <Stack.Screen name='MapScreen' component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
