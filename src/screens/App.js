import React,{Component} from 'react';
import {View,Text,Image,StyleSheet, ImageStore, SafeAreaView} from 'react-native';
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

export default class App extends Component{

    render()
    {
        return(
            <SafeAreaView style={{backgroundColor: '#E8EAF6',flex:1}}>

            <View style={{paddingTop: 20}}>
            <Image
            style={styles.logo}
            source={{uri:'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_960_720.png'}}/>

            <View style={{justifyContent:'center',flexDirection:'row',paddingRight:50}}>
                <Text style={styles.textstyle}>{string.name}</Text>
            </View>

            <View style={styles.horizontalView}>
                <Text style={styles.textstyle}>Email : </Text>
                <Text style={styles.textstyle2}>{string.email}</Text>
            </View>

            <View style={styles.horizontalView}>
                <Text style={styles.textstyle}>Contact Number : </Text>
                <Text style={styles.textstyle2}>{string.contactnumber}</Text>
            </View>

            <View style={styles.horizontalView}>
                <Text style={styles.textstyle}>City : </Text>
                <Text style={styles.textstyle2}>Surat</Text>
            </View>

            <View style={styles.horizontalView}>
                <Text style={styles.textstyle}>State : </Text>
                <Text style={styles.textstyle2}>Gujarat</Text>
            </View>
            </View>
        </SafeAreaView>
            
        
        );
        
    }
}
