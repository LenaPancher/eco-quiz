import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HelloText from "./HelloText";

export type StackParamList = {
  Home: undefined;
  Game: { id: number };
};

const Stack = createNativeStackNavigator<StackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => <HelloText text={"coucou"} color={"#e30404"}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
