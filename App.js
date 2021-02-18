/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import  MainTabScreen  from "./src/screens/MainBottom";
import  CustomDrawer from "./src/screens/DrawerContent";
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator  drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
          
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
