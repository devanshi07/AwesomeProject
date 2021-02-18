import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Messages from './Messages';
import Mycontacts from './MyContacts';
import MySubscribers from './MySubscriber';
import Memories from './Memories';
import Home from './Home';
import Mymemories from './MyMemory';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function MyProfile(navigation) {
  return (
    <Tab.Navigator initialRouteName="User">
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Homie" component={Homie}  options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="User" component={User}  options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Memories" component={Memories}  options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Mymemories" component={Mymemories}  options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="indent-more" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}
function Search() {
  return <View></View>;
}
function Homie() {
  return <View></View>;
}

function User(navigation) {
  

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
      />
      <Drawer.Screen name="Messages" component={Messages} />
      <Drawer.Screen name="MySubscribers" component={MySubscribers} />
      <Drawer.Screen name="Mycontacts" component={Mycontacts} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}


function Notification() {
  return <View></View>;
}