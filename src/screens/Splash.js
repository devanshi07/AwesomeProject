import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

function Splash({navigation}){

    useEffect(() => {
        setTimeout(() => {
            checkLoginStatus()
        }, 1000);
    },[])

    async function checkLoginStatus(){
        const value = await AsyncStorage.getItem('@isUserLogin');
        if (value && Number(value) == 1) {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeStack' }],
            });
        } else {
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeStack' }],
            });
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Screen</Text>
        </View>
    );
};
export default Splash;