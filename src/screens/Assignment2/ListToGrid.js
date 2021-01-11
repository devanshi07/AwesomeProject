//tonggle between list and grid

import React,{Component,useState,useEffect} from 'react';
import {View,Text,Image,StyleSheet,SafeAreaView,FlatList,TouchableOpacity, Dimensions} from 'react-native';
import {images} from "../../res/images/index";

const Item_width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2
    },
    postimage: {
        width: (Item_width - (10 * 3)) / 3,
        height:200,
        backgroundColor: '#fff',    
        margin:5
    },
    textstyle: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        color: "black"
    },
    headerTextstyle: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        color: "white",
        textAlign: 'center',
        paddingTop: 10,
        
    },
    headerStyle: {
        width: "100%",
        height: 50,
        alignItems: "center",
        backgroundColor: "red",
    }
});

let arrayList = [
    {
        title : "First",
        image : images.IMG_FIRST
    },
    {
        title : "Second",
        image : images.IMG_SECOND
    },
    {
        title : "Third",
        image : images.IMG_THIRD
    },
    {
        title : "Forth",
        image : images.IMG_FORTH
    },
    {
        title : "Fifth",
        image : images.IMG_FIFTH
    },
    {
        title : "Sixth",
        image : images.IMG_SIXTH
    },
    {
        title : "Seventh",
        image : images.IMG_SEVENTH
    },
    {
        title : "Eigth",
        image : images.IMG_EIGTH
    },
    {
        title : "Ninth",
        image : images.IMG_NINTH
    }

];

const renderItem = ({ item }) => (
    <View style={styles.container}>

                <Image
                    style={styles.postimage}
                    source={item.image}/> 
                <Text style={styles.textstyle}>{item.title}</Text>        
        </View>
  )
function ListToGrid(){

    const [nocolumn, setNoColumn] = useState(1);
    const [key, setKey] = useState(1);
        return(
            <SafeAreaView style={{backgroundColor: '#E8EAF6',flex:1}}>

            <View>
                <TouchableOpacity
                style={styles.headerStyle}
                onPress={() => {
                    if(nocolumn == 1)
                    {
                        setNoColumn(3);
                        setKey(key + 1);
                    }
                    else{
                        setNoColumn(1);
                        setKey(key + 1);
                    }
                    
                }}>
                    <Text style={styles.headerTextstyle}>Change Layout</Text>
                </TouchableOpacity>
                <FlatList
                style={{marginBottom:50}}
                key={key}
                numColumns={nocolumn}
                data={arrayList}
                renderItem={renderItem}
                keyExtractor={item => item.id}/>
            </View>
        </SafeAreaView> 
        );    
}
export default ListToGrid;
