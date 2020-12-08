//use useState and useEffect Task
import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const App6 = () =>{

    const [count, setCount] = useState(0);
    const [text, setText] = useState("Clicked");
    const [user, setUser] = useState("Mark");

    useEffect(() => {
        setText("UserEFFEct");
        }, []);
        
        useEffect(() => {
        setCount(count + 1);
        setText("Change");
        }, [count]);

        return (
            <View style={{ padding: 15 }}>
            <Text>{text + " " + count}</Text>
            <Button 
                title={"Click Count"} 
                style = {{ margin : 10 , padding: 10}}
                onPress={() => setCount(count + 1)} />

            <Button 
                title={"Click User"} 
                style = {{ margin : 10 , padding: 10}}
                onPress={() => setUser("New Mark")} />
            </View>
            );

};
export default App6;
