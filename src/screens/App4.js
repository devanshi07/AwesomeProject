//Insta App Task

import React,{Component} from 'react';
import {View,Text,FlatList,StyleSheet,Button, Image, SafeAreaView} from 'react-native';
import { images } from '../res/images/index';//for images
import { string } from '../utils/strings';//for strings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    horizontal: {
        flexDirection: 'row',
        flex:1,
        width:'100%'
    },
    logo: {
        height:30,
        width: 30,
        margin :10, 
        resizeMode: 'contain',     
    },
    foroption: {
        height:30,
        width: 30,
        margin: 10,
        marginRight: 20, 
        alignContent: 'flex-end',
        resizeMode: 'contain',
        flex:0.1
    },
    forsave: {
        height:30,
        width: 30,
        margin: 10,
        marginRight:20,
        justifyContent: 'flex-end',
        resizeMode: 'contain',
        marginEnd: 20,
        marginLeft: 220
    },
    description: {
        color: 'black',
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        fontFamily:'sans-serif-light',
    },
    username: {
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 10,
        flex:1,
        fontWeight: 'bold',
        fontFamily:'sans-serif-light',
    },
    forSafeAreaView: {
        backgroundColor: '#fff',
        flex:1
    },
    postimage: {
        width:'100%',
        height:300,
        backgroundColor: '#fff',
        resizeMode:'contain',
        flex:1
    }
    
});

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      name: 'first',
      image: images.IMG_FIRST
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      name: 'second',
      image: images.IMG_SECOND
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      name: 'third',
      image: images.IMG_THIRD
    
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.container}>
            
                <View style={styles.horizontal}>
                    <Image
                        style={styles.logo}
                        source={images.IMG_RACER}/>
                    <Text style={styles.username}>{item.title}</Text>
                    <Image
                        style={styles.foroption}
                        source={images.IMG_MORE}/>
                </View>

                
                <Image
                    style={styles.postimage}
                    source={item.image}/>

                <View style={styles.horizontal}>
                    <Image
                        style={styles.logo}
                        source={images.IMG_HEART}/>
                    <Image
                        style={styles.logo}
                        source={images.IMG_CHAT}/>
                    <Image
                        style={styles.logo}
                        source={images.IMG_SEND}/>
                    <Image
                        style={styles.forsave}
                        source={images.IMG_BOOKMARK}/>
                </View>

                <View style={styles.horizontal}>
                    <Text style={styles.description}>{item.name}</Text>
                </View>
        </View>
  )

export default class App4 extends Component{

    render()
    {
        return(
            <SafeAreaView style={styles.forSafeAreaView}>
                <FlatList
                    style={styles.container}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        );
        
    }
}
