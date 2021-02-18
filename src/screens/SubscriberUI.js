import React from "react";
import {
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Dimensions,
    FlatList
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { images } from '../res/images/index';//for images
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item_width = Dimensions.get("window").width;
let arrayList = [
    {
        title: "First",
        image: images.IMG_FIRST
    },
    {
        title: "Second",
        image: images.IMG_SECOND
    },
    {
        title: "Third",
        image: images.IMG_THIRD
    },
    {
        title: "Forth",
        image: images.IMG_FORTH
    },
    {
        title: "Fifth",
        image: images.IMG_FIFTH
    },
    {
        title: "Sixth",
        image: images.IMG_SIXTH
    },
    {
        title: "Seventh",
        image: images.IMG_SEVENTH
    },
    {
        title: "Eighth",
        image: images.IMG_EIGTH
    },
    {
        title: "Ninth",
        image: images.IMG_NINTH
    }

];
const renderItem = ({ item }) => (
    <TouchableOpacity>
        <View style={styles.container}>
            <Image
                style={styles.postimage}
                source={item.image} />
            <Text style={styles.textstyle}>{item.title}</Text>
        </View>
    </TouchableOpacity>
)

const ContactUI = () => {

    return (
        <ImageBackground source={images.IMG_BACKGROUND}
            style={{ width: "100%", height: "100%" }}>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginRight: 0, marginBottom: 0 ,height: "17%"}}>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: 66,
                            width: 66,
                            borderRadius: 50,
                            backgroundColor: "#5facdb",
                            marginLeft: 22
                        }}>
                        <MaterialCommunityIcons name="newspaper-variant-outline" color="white" size={26} />
                    </View>
                </ScrollView>

                <View style={{
                    flexDirection: "row",
                    backgroundColor: "#FFF",
                    borderRadius: 40,
                    alignItems: "center",
                    paddingVertical: 0,
                    paddingHorizontal: 10,
                    width: "90%",
                    marginBottom: 5,
                    marginTop: 10
                }}>
                    <Image source={images.IMG_SEARCH}
                        style={{
                            height: 15,
                            width: 15
                        }} />
                    <TextInput
                        placeholder="search"
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 20,
                            color: "black"
                        }} />
                </View>
                <FlatList
                    style={{marginBottom: 40}}
                    numColumns={2}
                    data={arrayList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id} />

            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({

    textInputStyle: {

        textAlign: 'center',
        color: "black",
        height: 50,
        width: '90%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    textStyle: {
        padding: 5,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20
    },
    container: {
        flex: 1,
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white"
    },
    postimage: {
        width: (Item_width - (10 * 2)) / 2,
        height: 200,
        backgroundColor: '#fff',
        margin: 5,
        borderWidth: 0,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    textstyle: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        color: "black"
    },

});
export default ContactUI;