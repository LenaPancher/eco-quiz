import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator
} from "@react-navigation/native-stack";
import Home from "../views/Home";
import Game from "../views/Game";
import Header from "./Header";
import Score from "../views/Score";

export type StackParamList = {
  Home: undefined;
  Game: { id: number };
  Score: { game_id: number };
};

const Stack = createNativeStackNavigator<StackParamList>();

// for route.params
export type routeProps = NativeStackScreenProps<StackParamList, "Game">;
// for useNavigation() only on Home
export type MyNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Home",
  "Game",
  "Score"
>;

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => (<Header currentModule={1} totalModule={30} />)
          }}
        />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Score" component={Score}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
