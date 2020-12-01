//FlatList Add, Delete And Update Task (Main App)

import React from 'react';
import {Text,StyleSheet, View, Button, FlatList, TouchableOpacity, TextInput} from 'react-native';
import { string } from '../utils/strings';
import { images } from '../res/images/index';//for images

let arrayList = [
    {
        title : "View"
    },
    {
        title : "text"
    },
    {
        title : "image"
    }
];

const App2 = () => {

    const [list, setList] = React.useState(arrayList);
    const [value, setValue] = React.useState("");
    const [index, setIndex] = React.useState(0);
    const [isAdd, setIsAdd] = React.useState(true);

    addValue = () =>{
        let item = { title : value};
        let arrayList = [...list];
        if(isAdd){
            arrayList.push(item);
        }
        else{
            arrayList[index].title = value;
        }
        setIsAdd(true);
        setList(arrayList);
        setValue("");

    }

    return(
        <>
            <View style={{ padding: 15 }}>

                <TextInput
                placeholder = {"Enter Value"}
                value={value}
                onChangeText = {text => {
                    setValue(text);
                }}/>

                <Button
                title = {"Submit "}
                onPress = {addValue}/>

                <FlatList
                data = {list}
                extraData = {list}
                renderItem = {({item,index}) => (
                    <View style={styles.container}>
                        <Text style={{flex : 1, fontSize : 15}}>{item.title}</Text>
                        <TouchableOpacity 
                            onPress = {() => {
                                let arrayList = [...list];
                                arrayList.splice(index);
                                setList(arrayList);
                            }}>
                                <Text style = {{ color: "blue" , marginRight : 10, fontSize : 15}} >{"DELETE"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress = {() => {
                                setIsAdd(false);
                                setIndex(index);
                                setValue(item.title);
                            }}>
                                <Text style = {{ color: "blue" ,fontSize : 15}} >{"EDIT"}</Text>
                        </TouchableOpacity>
                    </View>)}/>

            </View>
        </>
    );
};

const styles = StyleSheet.create({

    container: {
        padding : 15,
        backgroundColor : "#e3e3e3",
        borderColor : "#000",
        borderWidth : 1,
        borderRadius : 5,
        marginTop : 10,
        flexDirection : "row"
    }

});



export default App2;