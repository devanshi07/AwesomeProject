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
        
        marginLeft: 220
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
            
                <View style={{flexDirection: 'row',flex:1}}>
                    <Image
                        style={styles.logo}
                        source={images.IMG_RACER}/>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        textAlign: 'left',
                        marginTop: 10,
                        marginLeft: 10,
                        flex:1,
                        fontFamily:'sans-serif-light',
                    }}>{item.title}</Text>
                    <Image
                        style={styles.foroption}
                        source={images.IMG_MORE}/>
                </View>

                
                <Image
                    style={{width:'100%',height:300,backgroundColor: '#fff',resizeMode:'contain',flex:1}}
                    source={item.image}/>

                <View style={{flexDirection: 'row',flex: 1,width:"100%"}}>
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

                <View style={{flexDirection: 'row'}}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        marginTop: 10,
                        marginLeft: 10,
                        marginBottom: 10,
                        fontFamily:'sans-serif-light',
                    }}>{item.name}</Text>
                </View>
        </View>
  )

export default class App4 extends Component{

    render()
    {
        return(
            <SafeAreaView style={{backgroundColor: '#B39DDB',flex:1}}>

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
