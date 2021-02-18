import React from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Touchable
} from "react-native";
import { images } from '../res/images/index';//for images
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { profileui } from "./ProfileUI";

const App10 = ({ navigation }) => {

  return (
    <ImageBackground source={images.IMG_BACKGROUND}
      style={{ width: "100%", height: "100%" }}>

      <Text style={{ fontSize: 30, alignSelf: "center", marginTop: 20 }}>Social Networks</Text>

      <TouchableOpacity onPress={() => navigation.navigate('LoginUI')}
        style={{ width: "40%", height: 60, marginTop: 200, backgroundColor: "red", borderRadius: 50, alignContent: "center", alignSelf: "center", justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 20 }}>GET STARTED</Text>
      </TouchableOpacity>


    </ImageBackground>
  );
};

export default App10;