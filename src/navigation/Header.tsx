import {Pressable, Text, View} from "react-native";
import HeaderButton from "./HeaderButton";
import {Entypo, FontAwesome5, Octicons} from "@expo/vector-icons";
import ProgressBar from "../component/ProgressBar";
import {MyNavigationProp} from "./Navigator";
import {useNavigation} from "@react-navigation/native";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import React from "react";
import {restartCurrentQuestionIndexState} from "../store/slices/CurrentQuestionIndexSlice";

export type headerProps = {
  isGamePage: boolean;
};

const Header = ({isGamePage}: headerProps) => {
  const navigation = useNavigation<MyNavigationProp>();
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.game.game);
  const currentQuestionIndex = useAppSelector((state) => state.currentQuestionIndex.value);
  const currentLevel = useAppSelector((state) => state.currentLevel.value);
  const lives = useAppSelector((state) => state.lives);
  const totalQuestions = game[currentLevel]?.questions?.length;
  const gameIsDone = game?.filter((game) => game.isDone === true).length;

  const handleGoBack = () => {
    navigation.goBack();
    dispatch(restartCurrentQuestionIndexState());
  };

  if (isGamePage)
    return (
      <View className="justify-evenly items-end flex-row h-[90px]">
        <View className="items-center justify-evenly w-full flex-row">
          <Pressable onPress={handleGoBack}>
            <Entypo name="cross" size={38} color="lightgray"/>
          </Pressable>
          <ProgressBar
            currentStep={currentQuestionIndex}
            totalStep={totalQuestions}
            width={250}
            backgroundColor={"forestgreen"}
          />
          <HeaderButton
            icon={<Entypo name="heart" size={32} color="crimson"/>}
            textColor="crimson"
            totalRemaining={lives}
          />
        </View>
      </View>
    );

  return (
    <View
      className="justify-end h-[180px] p-4 pl-4 pr-4 mb-3"
      style={{
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        elevation: 3,
        borderRadius: 20
      }}
    >
      <View className="flex-row items-center justify-between">
        <HeaderButton
          icon={<Octicons name="flame" size={24} color="orange"/>}
          textColor="orange"
          totalRemaining={{value: 3}}
        />
        <HeaderButton
          icon={<Entypo name="heart" size={24} color="crimson"/>}
          textColor="crimson"
          totalRemaining={lives}
        />
      </View>
      <Text className="self-center front-bold text-lg">
        Mes modules
      </Text>
      <View className="flex-row self-center justify-around w-full items-center mt-2 mb-4">
        <FontAwesome5 name="crown" size={24} color="gold"/>
        <ProgressBar
          currentStep={gameIsDone}
          totalStep={game.length}
          width={250}
          backgroundColor={"gold"}
        />
        <Text style={{color: "darkgray"}} className="font-bold">
          {gameIsDone} / {game.length}
        </Text>
      </View>
      <View className="w-24 h-1 self-center bg-[#d7d7d7]"/>
    </View>
  );
};

export default Header;
