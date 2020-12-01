//foobar task

import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button, Alert, SafeAreaView} from 'react-native';
import { images } from '../res/images/index';//for images
import { string } from '../utils/strings';//for strings

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    horizontalView: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'center',
    },
    logo: {
        height:200,
        resizeMode: 'contain',
        borderRadius: 100,
        paddingBottom: 150,
    },
    textstyle: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right',
        paddingTop: 10,
        flex: 0.5
    },
    textstyle2: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        paddingTop: 10,
        flex: 0.5,
        color: '#2196F3'
    },
    
});



export default class App3 extends Component{

    render()
    {
        return(
            <SafeAreaView style={{backgroundColor: '#B39DDB',flex:1}}>

            <View style={{paddingTop: 20}}>
            
                <View style={{justifyContent:'center'}}>
                    <Text style={{
                        color: 'white',
                        fontSize: 40,
                        textAlign: 'center',
                        marginTop: 60,
                        fontFamily:'sans-serif-light',
                    }}>FOOBAR</Text>
                </View>

                <View style={{margin:10}}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='white'
                        style={{
                            color: 'white',
                            borderBottomWidth: 1,
                            fontSize: 20,
                            fontFamily:'sans-serif-light',
                            borderBottomColor: 'white',
                            marginTop: 20
                        }}
                    ></TextInput>
                </View>

                <View style={{margin:10}}>
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor='white'
                        style={{
                            color: 'white',
                            borderBottomWidth: 1,
                            fontSize: 20,
                            fontFamily:'sans-serif-light',
                            borderBottomColor: 'white',
                            marginTop: 5
                        }}
                    ></TextInput>
                </View>

                <View style={{justifyContent:'center',marginTop:30,marginLeft:10,marginRight:10}}>
                    <Button
                        title="LOGIN"
                        color="#7E57C2"
                        style={{justifyContent:'center',height:50}}
                        onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
            </View>
        </SafeAreaView>
            
        
        );
        
    }
}
