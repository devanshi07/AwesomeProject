import React from "react";
import {
    View,
    ImageBackground,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from "react-native";
import { images } from '../res/images/index';//for images

const ContactUI = ({navigation}) => {

    return (
        <ImageBackground source={images.IMG_BACKGROUND}
            style={{ width: "100%", height: "100%" }}>


            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>Contact Form</Text>
            </View>

            <View style={{
                marginTop: 30,
                width: "90%",
                height: "30%",
                alignSelf: "center",
                borderRadius: 20,
                borderColor: "grey",
                borderWidth: 1,
                backgroundColor: "white",
                shadowColor: "grey",

            }}>
                <TextInput

                    placeholder="Email"
                    placeholderTextColor="black"
                    style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                />
                <TextInput

                    placeholder="Contact Type"
                    placeholderTextColor="black"
                    style={styles.textInputStyle}
                    underlineColorAndroid='transparent'
                />
            </View>
            <TouchableOpacity 
            style={{ width: "40%", height: 60, marginTop: 60, backgroundColor: "red", borderRadius: 50, alignContent: "center", alignSelf: "center", justifyContent: "center" }}>
                <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 20 }}>SEND</Text>
            </TouchableOpacity>

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
    }

});
export default ContactUI;