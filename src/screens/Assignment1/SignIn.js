//SignIn page

import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button, Alert, SafeAreaView,TouchableOpacity} from 'react-native';
import { images } from '../../res/images/index';//for images

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B39DDB',
        flex:1
    },
    smallContainer: {
        margin:10,
    },
    title: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 60,
        fontFamily:'sans-serif-light',
        marginBottom: 20
    },
    inputText: {
        color: 'white',
        borderBottomWidth: 1,
        fontSize: 20,
        fontFamily:'sans-serif-light',
        borderBottomColor: 'white',                        
    },
    buttonStyle: {
        borderWidth: 1,
        height: 50,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "black",
        alignSelf: "center",
        textAlign: "center"
    },
    textstyle: {
        color: "white" , 
        marginRight : 10, 
        fontSize : 20,                          
        fontFamily:'sans-serif-light',
        
    },
    signInStyle: {
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10
    },
    justifyContentOnly: {
        justifyContent:'center'
    }

});

const SignIn = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    validation = () =>{

        //var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(username == ""){
            alert("Please Enter Username");
        }
        else if(!re.test(username))
        {
            alert("Please Enter Proper Username");
        }
        else if(password == "")
        {
            alert("Please Enter Password.");
        }
        else{
            alert("Login Successfully.");
        }
    }
   
        return(
            <SafeAreaView style={styles.container}>

            <View style={styles.smallContainers}>
            
                <View style={styles.justifyContentOnly}>
                    <Text style={styles.title}>Sign In</Text>
                </View>

                <View style={styles.smallContainer}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='white'
                        onChangeText={value =>{ setUsername(value)}}
                        style={styles.inputText}
                    ></TextInput>
                </View>

                <View style={styles.smallContainer}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='white'
                        onChangeText={value =>{ setPassword(value)}}
                        style={styles.inputText}
                    ></TextInput>
                </View>
 
                <View style={styles.smallContainer}>
                    <TouchableOpacity 
                        onPress={() =>{
                            Alert.alert("Go to forgot password ");
                        }}
                        style ={{
                            height: 50,
                            width: "40%",
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "flex-end",
                            textAlign: "right",
                        }}>
                            <Text style = {{
                                color: "white" , 
                                marginRight : 10, 
                                fontSize : 18,                          
                                fontFamily:'sans-serif-light',
                            }} >{"Forgot Password"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signInStyle}>
                    <TouchableOpacity 
                        onPress = {validation}
                        style ={styles.buttonStyle}>
                            <Text style = {styles.textstyle} >{"Login"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.smallContainer,{marginTop:150}}>
                    <TouchableOpacity 
                        onPress={() =>{
                            Alert.alert("Go to Sign up ");
                        }}
                        style={{
                            height: 50,
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "center",
                            alignSelf: "center",
                            textAlign: "center",
                            borderBottomColor: "white",
                            borderBottomWidth: 1,   
                        }}>
                            <Text style = {styles.textstyle} >{"Sign Up"}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
        );    
};

export default SignIn;
