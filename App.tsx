import {StatusBar} from "expo-status-bar";
import {View} from "react-native";
import HelloText from "./src/component/HelloText";
import React from "react";
import LevelComponent from "./src/component/LevelComponent";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <LevelComponent />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
