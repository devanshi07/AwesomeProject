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
import { images } from '../res/images/index';//for images

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
            <View>
                <Text style={styles.textstyle}>{item.title}</Text>
                <Text style={{marginLeft: 30}}>qwertyuiosdfgh</Text>
                <Text style={{marginLeft: 30}}>qwertyuiosdfgh</Text>
                <Text style={{marginLeft: 30}}>qwertyuiosdfgh</Text>
            </View>

        </View>
    </TouchableOpacity>
)

const ContactUI = () => {

    return (
        <ImageBackground source={images.IMG_BACKGROUND}
            style={{ width: "100%", height: "100%" }}>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 5 }}>
            <View style={{
                flexDirection: "row",
                backgroundColor: "#FFF",
                borderRadius: 40,
                alignItems: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
                width: "90%",
                marginBottom: 5
            }}>
                <Image source={images.IMG_SEARCH}
                style={{
                    height: 15,
                    width:15
                }}/>
                <TextInput
                placeholder="search"
                style={{paddingHorizontal:20,
                fontSize:20,
                color:"black"}}/>
            </View>
                <FlatList
                    style={{ marginBottom: 40 }}
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
        flexDirection: "row",
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 2,
        margin: 5,
        width: Item_width,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "white"
    },
    postimage: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        margin: 5,
        borderWidth: 0,
        borderRadius: 20,

    },
    textstyle: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        paddingTop: 10,
        color: "black",
        marginLeft: 30
    },

});
export default ContactUI;