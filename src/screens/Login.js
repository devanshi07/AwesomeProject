import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage} from '@react-native-community/async-storage';
function Login({navigation}) {

  async function callApiLogin(){
    await AsyncStorage.setItem('@isUserLogin', '1');
    navigation.navigate('HomeStack');
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={() => callApiLogin()}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;