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
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from "react-native-paper";
import { images } from '../res/images/index';//for images

const App10 = ({navigation}) => {

    return (
        <ImageBackground source={images.IMG_BACKGROUND}
            style={{ width: "100%", height: "100%" }}>

            <View style={{
                flexDirection: "row",
                margintop: 40,
                alignSelf: "center",
                paddingTop:20,
            }}>
                <Avatar.Image
                    source={images.IMG_FIRST}
                    size={100} />
                <View style={{ marginLeft: 30 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>Molly Fox</Text>
                    <Text>qwertyuioasdfg</Text>
                    <Text>asdfghjfghj</Text>
                    <Text>xcvbncvb</Text>
                </View>
            </View>

            <View style={{
                marginTop: 70,
                width: "90%",
                height: "30%",
                alignSelf: "center",
                borderRadius: 20,
                borderColor: "grey",
                borderWidth: 2,
                backgroundColor: "white",
                shadowColor: "grey",

            }}>
                <Text style={{ backgroundColor: "yellow", fontSize: 30, fontWeight: "bold", textAlign: "center", borderWidth: 0, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>Her Interests</Text>
                <View style={{ padding:5,flexDirection: "row",alignSelf: "center", alignItems: "center", backgroundColor: "white", width: "100%", borderWidth: 0, borderBottomEndRadius: 20, borderBottomLeftRadius: 20, justifyContent: "center" }}>
                    <Text style={styles.textStyle}>Reading</Text>
                    <Text style={styles.textStyle}>Hobby</Text>
                    <Text style={styles.textStyle}>Reading</Text>
                    <Text style={styles.textStyle}>Reading</Text>
                </View>
                <View style={{ padding:5,flexDirection: "row",alignSelf: "center", alignItems: "center", backgroundColor: "white", width: "100%", borderWidth: 0, borderBottomEndRadius: 20, borderBottomLeftRadius: 20, justifyContent: "center" }}>
          <Text style={styles.textStyle}>Reading</Text>
          <Text style={styles.textStyle}>Hobby</Text>
          <Text style={styles.textStyle}>Reading</Text>
          <Text style={styles.textStyle}>Reading</Text>
        </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Top Contact")}
            style={{ width: "40%", height: 60, marginTop: 60, backgroundColor: "red", borderRadius: 50, alignContent: "center", alignSelf: "center", justifyContent: "center" }}>
                <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 20 }}>NEXT</Text>
            </TouchableOpacity>

        </ImageBackground>
    );
};
const styles = StyleSheet.create({

    textInputStyle: {

        textAlign: 'center',
        color: "black",
        height: 70,
        width: '90%',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 7,
        marginTop: 20,
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    textStyle: {
        padding: 10,
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 20,
        marginRight:15,
    }


});
export default App10;