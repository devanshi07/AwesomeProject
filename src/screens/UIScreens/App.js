import React,{useState,useEffect} from 'react';
import {View,Text,Image,TextInput,Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../UI';
import Login from '../LoginUI';
import MyProfile from '../MainUI';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SocialNetwork" component={MyProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}