import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import HelloText from "./src/component/HelloText";

export default function App() {
  return (
    <View style={styles.container}>
      <HelloText text={"Hello world bitches !"} color={"#f50909"}></HelloText>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
