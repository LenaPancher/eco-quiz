import {SafeAreaView} from "react-native";
import QuestionComponent from "../component/QuestionComponent";
import React from "react";
import {routeGameProps} from "../navigation/Navigator";

const Game = ({route}: routeGameProps) => {
  const {id} = route.params;

  return (
    <SafeAreaView className={"bg-[#FFFFFF]"}>
      <QuestionComponent level={id}/>
    </SafeAreaView>
  );
};

export default Game;
