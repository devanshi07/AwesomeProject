//Sign up page task

import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button, Alert, SafeAreaView,TouchableOpacity} from 'react-native';
import { images } from '../../res/images/index';//for images
import { string } from '../../utils/strings';//for strings
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B39DDB',
        flex:1
    },
    smallContainer: {
        margin:10
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
    pickerStyle: {
        height: 50, 
        width: "100%",
        color: "white",
        fontSize: 20,
        borderColor: "white",
        borderWidth: 1
    },
    datePickerstyle: {
        height: 42,
        width: "100%",
        alignSelf: "center", 
        justifyContent: "center",
        textAlign: "center",
        borderBottomColor: "white",
        borderBottomWidth: 1
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
        marginTop: 5
    },
    buttonViewStyle: {
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10
    },
    justifyContentOnly: {
        justifyContent:'center'
    }

});



const App3 = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [gender, setGender] = React.useState("male");

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);
    
    const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };
     
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
     
    const showDatepicker = () => {
        showMode('date');
      };

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
   
    const formatDate = (date) => {
        var formattedDate = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        return(formattedDate);
    };

        return(
            <SafeAreaView style={styles.container}>

            <View style={styles.smallContainers}>
            
                <View style={styles.justifyContentOnly}>
                    <Text style={styles.title}>Sign Up</Text>
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
                <Text style = {styles.textstyle} >Gender</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                    }>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
                </View>

                <View style={styles.smallContainer}>
                <Text style = {styles.textstyle} >Birth Date</Text>
                    <TouchableOpacity 
                        onPress = {showDatepicker}
                        style ={styles.datePickerstyle}>
                            <Text style = {styles.textstyle} >{formatDate(date)}</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.buttonViewStyle}>
                    <TouchableOpacity 
                        onPress = {validation}
                        style ={styles.buttonStyle}>
                            <Text style = {styles.textstyle} >{"Login"}</Text>
                    </TouchableOpacity>
                </View>
                {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
            </View>
        </SafeAreaView>
        );    
};

export default App3;
