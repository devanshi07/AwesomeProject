//custom fonts, Alert 
import React from "react";
import { View, Text, Button, Alert} from "react-native";
import { WebView } from 'react-native-webview';

const App7 = () =>{

    const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

    return(
        <>
            <Text style={{
                fontFamily: 'GreatVibes-Regular',
                fontSize: 40,
                color: "red",    
            }}>Welcome to React Native</Text>
            <Text style={{
                fontFamily: 'Lobster',
                fontSize: 40,
                color: "red",    
            }}>Welcome to React Native</Text>
            <Button 
                title='Alert'
                onPress={createThreeButtonAlert}/>
            <WebView source={{ uri: 'https://reactnative.dev/' }} />

        </>
    );
};
export default App7;