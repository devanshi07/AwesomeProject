import React from "react";
import {Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import UIScreen from "./UI";
import MainUi from "./MainUI";
import ContactUi from "./ContactUI";
import MemoryUi from "./MemoryUI";
import SubscriberUi from "./SubscriberUI";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainBottom() {
    return (
        <Tab.Navigator
          style={{ backgroundColor: "tomato" }}
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}>
          <Tab.Screen
            name="Artical"
            component={ArticalStack}
            options={{
              tabBarLabel: 'Article',
              tabBarColor: "#009387",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="newspaper-variant-outline" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Chat"
            component={ChatStack}
            options={{
              tabBarLabel: 'Chat',
              tabBarColor: "#d02860",
    
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="chat-outline" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Contact"
            component={ContactStack}
            options={{
              tabBarLabel: "Contact",
              tabBarColor: "#8a2be2",
    
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="contacts-outline" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Album"
            component={AlbumStack}
            options={{
              tabBarLabel: "Album",
              tabBarColor: "#8b0000",
    
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="image-album" color={color} size={26} />
              ),
            }} />
        </Tab.Navigator>
      );
    
}

function ArticalStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ArticalList" component={UIScreen} />
        <Stack.Screen name="MySubscriber" component={SubscriberUi} />
      </Stack.Navigator>
    );
  }
  function ChatStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={MainUi} />
        {/* <Stack.Screen name="ChatDetails" component={ChatDetails} /> */}
      </Stack.Navigator>
    );
  }
  function ContactStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={ContactUi} />
      </Stack.Navigator>
    );
  }
  function AlbumStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Album" component={MemoryUi} />
      </Stack.Navigator>
    );
  }
export default MainBottom;
