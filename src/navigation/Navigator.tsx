import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps
} from "@react-navigation/native-stack";
import Home from "../views/Home";
import Game from "../views/Game";
import Header from "./Header";
import Score from "../views/Score";

export type StackParamList = {
  Home: undefined;
  Game: { id: number };
  Score: { score: number; nbQuestion: number };
};

const Stack = createNativeStackNavigator<StackParamList>();

// for route.params
export type routeGameProps = NativeStackScreenProps<StackParamList, "Game">;
export type routeScoreProps = NativeStackScreenProps<StackParamList, "Score">;
// for useNavigation() only on Home
export type MyNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Home",
  "Game"
>;
// for useNavigation() only on Game
export type NavigationGameProps = NativeStackNavigationProp<
  StackParamList,
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
            header: () => <Header isGamePage={false} />
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            header: () => <Header isGamePage={true} />
          }}
        />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
