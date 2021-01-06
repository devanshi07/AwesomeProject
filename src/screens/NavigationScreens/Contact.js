//Contact list 

import React,{Component} from 'react';
import {View,Text,Image,StyleSheet,SafeAreaView} from 'react-native';
import {images} from "../../res/images/index";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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
        
    },
    
});

export default class Contact extends Component{

    render()
    {
        return(
            <SafeAreaView style={{backgroundColor: '#E8EAF6',flex:1}}>

            <View style={{paddingTop: 20}}>
                <Image
                style={styles.logo}
                source={images.IMG_THIRD}/>

                <View style={{justifyContent:'center',flexDirection:'row',paddingRight:50}}>
                    <Text style={styles.textstyle}>Contact Page</Text>
                </View>
            </View>
        </SafeAreaView> 
        );    
    }
}
