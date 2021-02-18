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
    <TouchableOpacity onPress={() => navigation.navigate("Contact Details")}>
        <View style={styles.container}>
            <Image
                style={styles.postimage}
                source={item.image} />
            <View>
                <Text style={styles.textstyle}>{item.title}</Text>
                <Text style={{ marginLeft: 30 }}>qwertyuiosdfgh</Text>
            </View>

        </View>
    </TouchableOpacity>
)

const ContactUI = ({ navigation }) => {

    return (
        <ImageBackground source={images.IMG_BACKGROUND}
            style={{ width: "100%", height: "100%" }}>

            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                <View style={{
                    margin: 10, backgroundColor: "white", height: "17%", alignItems: "center", justifyContent: "center",
                    alignContent: "center", paddingVertical: 10,
                    borderRadius: 10, paddingHorizontal: 10
                }}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginRight: 0, marginBottom: 0 }}>
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
                </View>
                <FlatList
                    style={{ margin: 10, backgroundColor: "white", borderRadius: 10 }}
                    data={arrayList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    onPress={() => { navigation.navigate("Contact Details") }} />
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
        borderBottomColor: 'black',
        borderBottomWidth: 0,
        margin: 5,
        width: Item_width,
        borderBottomColor: "grey",
        backgroundColor: "white"
    },
    postimage: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        margin: 5,
        borderWidth: 0,
        borderRadius: 100,

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