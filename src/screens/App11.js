import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Home";
import SplashScreen from "./Splash";
import LoginScreen from "./Login";

const Stack = createStackNavigator();

const App11 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Register" component={Register} /> */}
    </Stack.Navigator>
  );
}

function HomeStack(){
  return(
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* <Stack.Screen name="Register" component={Register} /> */}
  </Stack.Navigator>
  );  
}

export default App11;
