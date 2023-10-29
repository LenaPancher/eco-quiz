import {Image, SafeAreaView, Text, View} from "react-native";
import world from "../../assets/Images/world.png";
import ScoreComponent from "../component/ScoreComponent";
import ButtonComponent from "../component/ButtonComponent";
import {CommonActions, useNavigation} from "@react-navigation/native";
import {routeScoreProps} from "../navigation/Navigator";
import {useAppDispatch} from "../store/hooks";
import {updateIsDoneInGame} from "../store/slices/GameSlice";
import React from "react";

const Score = ({route}: routeScoreProps) => {
  const navigation = useNavigation();
  const {score, nbQuestion, id} = route.params;
  const dispatch = useAppDispatch();

  const handleResetHome = () => {
    if (score === nbQuestion) {
      dispatch(updateIsDoneInGame(id));
    }
    navigation.dispatch(CommonActions.reset({
      index: 1,
      routes: [
        {name: "Home"}
      ]
    }));
  };

  return (
    <SafeAreaView className={"bg-[#FFFFFF] w-full h-full justify-between"}>
      <View className={"flex-1 justify-center"}>
        <Image source={world} className={"self-center"}/>
      </View>
      <View className={"flex-1"}>
        <Text className={"text-center text-3xl mb-10"}>Leçon terminée !</Text>
        <View className={"flex-wrap flex-row justify-center"}>
          <ScoreComponent bg={"gold"} ml={"ml-4"} mr={"mr-2"} title={"Réussite"} colorSubTitle={"gold"}
            icon={"crown"} score={`${score} / ${nbQuestion}`}/>
          <ScoreComponent bg={"#15DF11"} mr={"mr-4"} ml={"ml-2"} title={"Précision"} colorSubTitle={"#15DF11"}
            icon={"bullseye"} score={`${(score * 100) / nbQuestion} %`}/>
        </View>
      </View>
      <ButtonComponent onPress={handleResetHome} title={"Continuer"} bg={"#01B3FF"}/>
    </SafeAreaView>
  );
};

export default Score;
