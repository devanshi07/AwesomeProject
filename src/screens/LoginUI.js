import React, {useState} from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Touchable,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import { images } from '../res/images/index';//for images

const App10 = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");

  function checkValidation() {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(name == "")
    {
      Alert.alert("Enter Valid Name !");
    }
    else if(email == "")
    {
      Alert.alert("Enter Valid Email !");
    }
    else if(!re.test(email))
    {
      Alert.alert("Enter Valid Email !");
    }
    else if(dob == "")
    {
      Alert.alert("Enter Valid Date of Birth !");
    }
    else if(password == "")
    {
      Alert.alert("Enter Valid Password !");
    }
    else{
      navigation.navigate("HomeStack");
    }
    
  }
  return (
    <ImageBackground source={images.IMG_BACKGROUND}
      style={{ width: "100%", height: "100%" }}>

      <View style={{
        marginTop: 70,
      }}>
        <TextInput

          placeholder="Full Name"
          placeholderTextColor="black"
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          onChangeText={text => {setName(text);}}
        />
        <TextInput

          placeholder="Email"
          placeholderTextColor="black"
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          onChangeText={text => {setEmail(text);}}
        />
        <TextInput

          placeholder="Date of Birth"
          placeholderTextColor="black"
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          onChangeText={text => {setDob(text);}}
        />
        <TextInput

          placeholder="Password"
          placeholderTextColor="black"
          style={styles.textInputStyle}
          underlineColorAndroid='transparent'
          onChangeText={text => {setPassword(text);}}
        />

        <TouchableOpacity onPress={() => navigation.navigate("HomeStack")}>
          <View style={{ alignContent: "center", justifyContent: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
            <Image source={images.IMG_RACER} style={{ width: 50, height: 50, alignSelf: "center" }}></Image>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 20, marginLeft: 30 }}>Upload Your Photo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => checkValidation()}
        style={{ width: "40%", height: 60, marginTop: 30, backgroundColor: "red", borderRadius: 50, alignContent: "center", alignSelf: "center", justifyContent: "center" }}><Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 20 }}>NEXT</Text></TouchableOpacity>

    </ImageBackground>
  );
};
const styles = StyleSheet.create({

  textInputStyle: {

    textAlign: 'center',
    color: "black",
    height: 70,
    width: '90%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20
  },



});
export default App10;