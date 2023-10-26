import {Text, View, Pressable} from "react-native";
import HeaderButton from "./HeaderButton";
import {Entypo, FontAwesome5, Octicons} from "@expo/vector-icons";
import ProgressBar from "../component/ProgressBar";
import {MyNavigationProp} from "./Navigator";
import {useNavigation} from "@react-navigation/native";
import {useAppSelector} from "../store/hooks";
import React, {useEffect, useState} from "react";
import {Level} from "../store/slices/GameSlice";

export type headerProps = {
  isGamePage: boolean;
};

const Header = ({isGamePage}: headerProps) => {
  const navigation = useNavigation<MyNavigationProp>();
  const game = useAppSelector((state) => state.game.game);
  const [currentLevel, setCurrentLevel] = useState(0);
  const findLastGameDone = (arr: Level[]) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      arr[i].isDone && setCurrentLevel(i);
    }
  };
  const totalQuestions = 8;
  const currentQuestion = 2;

  useEffect(() => {
    findLastGameDone(game);
  }, [game]);

  if (isGamePage)
    return (
      <View className="justify-evenly items-end flex-row h-[90px]">
        <View className="items-center justify-evenly w-full flex-row">
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name="cross" size={38} color="lightgray" />
          </Pressable>
          <ProgressBar
            currentStep={currentQuestion}
            totalStep={totalQuestions}
            width={250}
            backgroundColor={"forestgreen"}
          />
          <HeaderButton
            icon={<Entypo name="heart" size={32} color="crimson" />}
            textColor="crimson"
            totalRemaining={3}
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
          icon={<Octicons name="flame" size={24} color="orange" />}
          textColor="orange"
          totalRemaining={4}
        />
        <HeaderButton
          icon={<Entypo name="heart" size={24} color="crimson" />}
          textColor="crimson"
          totalRemaining={3}
        />
      </View>
      <Text className="self-center front-bold text-lg">
        {" "}
        Module {currentLevel}{" "}
      </Text>
      <View className="flex-row self-center justify-around w-full items-center mt-2 mb-4">
        <FontAwesome5 name="crown" size={24} color="gold" />
        <ProgressBar
          currentStep={currentLevel}
          totalStep={game.length}
          width={250}
          backgroundColor={"gold"}
        />
        <Text style={{color: "darkgray"}} className="font-bold">
          {" "}
          {currentLevel} / {game.length}{" "}
        </Text>
      </View>
      <View className="w-24 h-1 self-center bg-[#d7d7d7]" />
    </View>
  );
};

export default Header;
