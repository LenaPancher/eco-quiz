import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import HelloText from "./src/component/HelloText";
import React from "react";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <HelloText text={"Hello world bitches !"} color={"#f50909"}></HelloText>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
