import React, {useState} from 'react';
import {View, Button, Platform, TextInput} from 'react-native';
//import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';


const App9 = () => {
    state = {
        language: 'java',
      };

    const [selectedValue, setSelectedValue] = React.useState("java");
return(
    <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 100,flex:1}}
        onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
    </Picker>
    );
};
export default App9;