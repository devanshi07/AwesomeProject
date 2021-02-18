import React from "react";
import { View,StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator,DrawerItem,DrawerContentScrollView } from "@react-navigation/drawer";
import { images } from '../res/images/index';//for images


import LoginScreen from "./LoginUI";
import UIScreen from "./UI";
import Memoryui from "./MemoryUI";
import Subscriberui from "./SubscriberUI";
import ContactProfileui from "./ContactProfileUI";
import Mymemoriesui from "./UIScreens/MyMemory";
import ProfieUi from "./ProfileUI";
// import { CustomDrawer } from "./DrawerContent";
import ContactUI from "./ContactUI";
import Messages from "./UIScreens/Messages";
import TopContact from "./TopContactUI";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const DrawerUI = createDrawerNavigator();

function BottamNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={UIScreen}
          options={{ headerShown: false }} />
        <Stack.Screen name="HomeStack" component={HomeStack}
          options={{ headerShown: false }} />
        <Stack.Screen name="LoginUI" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: "tomato" }}
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Account"
        component={ArticalStack}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen
        name="Subscriber"
        component={ChatStack}
        options={{
          tabBarLabel: 'Subscriber',
          tabBarColor: "#d02860",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple-outline" color={color} size={26} />
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
        name="Memory"
        component={AlbumStack}
        options={{
          tabBarLabel: "Memory",
          tabBarColor: "#8b0000",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="notebook" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}
function ArticalStack() {
  return (
    <DrawerUI.Navigator drawerContent={(props) => <CustomDrawer {...props}></CustomDrawer>}>
      <DrawerUI.Screen name="MyProfile" component={ProfieUi} options={{headerShown: true,}}/>
      <DrawerUI.Screen name="ContactForm" component={ContactUI} options={{headerShown: true,}}/>
      <DrawerUI.Screen name="My Subscribers" component={Subscriberui} options={{headerShown: true}}/>
      <DrawerUI.Screen name="Messages" component={Messages} options={{headerShown: true,}}/>

      {/* <Stack.Screen name="ArticalDetail" component={ArticalDetail} /> */}
    </DrawerUI.Navigator>
  );
}
function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top Contact" component={TopContact} />
      {/* <Stack.Screen name="ChatDetails" component={ChatDetails} /> */}
    </Stack.Navigator>
  );
}
function ContactStack() {
  return (
    <Stack.Navigator initialRouteName="Top Contact">
      {/* <Stack.Screen name="Contact Form" component={Contactui} /> */}
      <Stack.Screen name="Top Contact" component={TopContact} />
      <Stack.Screen name="Contact Details" component={ContactProfileui} />

    </Stack.Navigator>
  );
}
function AlbumStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Memory" component={Memoryui} />
    </Stack.Navigator>
  );
}
function CustomDrawer(props) {
  return (
      <View style={{ flex: 1 }}>
          <DrawerContentScrollView {...props}>
              <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                      <View style={{ flexDirection: "row", marginTop: 15 }}>
                          <Avatar.Image
                              source={images.IMG_FIRST}
                              size={50} />
                          <View style={{ marginLeft: 15, flexDirection: "column" }}>
                              <Title style={styles.title}>XYZ ABX</Title>
                              <Caption style={styles.caption}>@xyzsddfe</Caption>
                          </View>
                      </View>
                  </View>
                  <Drawer.Section style={styles.drawerSection}>
                      <DrawerItem
                          icon={({ color, size }) => (
                              <MaterialCommunityIcons name="home" color={color} size={size} />
                          )}
                          label="Home"
                          onPress={() => {props.navigation.navigate("MyProfile") }} />
                      <DrawerItem
                          icon={({ color, size }) => (
                              <MaterialCommunityIcons name="message-text-outline" color={color} size={size} />
                          )}
                          label="Messages"
                          onPress={() => { props.navigation.navigate("Messages")}} />
                      <DrawerItem
                          icon={({ color, size }) => (
                              <MaterialCommunityIcons name="account-multiple-outline" color={color} size={size} />
                          )}
                          label="My Subscribers"
                          onPress={() => {props.navigation.navigate("My Subscribers") }} />
                      <DrawerItem
                          icon={({ color, size }) => (
                              <MaterialCommunityIcons name="hammer-screwdriver" color={color} size={size} />
                          )}
                          label="Settings"
                          onPress={() => { }} />
                      <DrawerItem
                          icon={({ color, size }) => (
                              <MaterialCommunityIcons name="bell-ring-outline" color={color} size={size} />
                          )}
                          label="Notification"
                          onPress={() => { }} />
                  </Drawer.Section>
                  <Drawer.Section title="Preferences">
                      <TouchableRipple onPress={() => { toggleTheme() }}>
                          <View style={styles.preference}>
                              <Text>Dark Theme</Text>
                              <View pointerEvents="none">
                                  <Switch />
                              </View>
                          </View>
                      </TouchableRipple>
                  </Drawer.Section>
              </View>
          </DrawerContentScrollView>
          <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                  icon={({ color, size }) => (
                      <MaterialCommunityIcons name="exit-to-app" color={color} size={size} />
                  )}
                  label="Sign Out"
                  onPress={() => { }} />
          </Drawer.Section>
      </View>
  );
}
export default BottamNavigation;
const styles = StyleSheet.create({
  drawerContent: {
      flex: 1,
  },
  userInfoSection: {
      paddingLeft: 20,
  },
  title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: "bold",
  },
  caption: {
      fontSize: 14,
      lineHeight: 14,
  },
  row: {
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
  },
  section: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 15,
  },
  paragraph: {
      fontWeight: "bold",
      marginRight: 3,
  },
  drawerSection: {
      marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: "#f4f4f4",
      borderTopWidth: 1,
  },
  preference: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16,
  },
});