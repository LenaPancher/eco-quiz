import {Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";
import React from "react";

interface SnackBarComponentProps {
  bg: string;
  height: string;
  title: string;
  correctAnswer?: string;
  icon: string;
  colorIcon: string;
}

const SnackBarComponent = ({bg, height, title, correctAnswer, icon, colorIcon}: SnackBarComponentProps) => {
  return (
    <View className={`h-${height} z-10 absolute bottom-0 w-full`} style={{backgroundColor: bg, zIndex: 1}}>
      <View className={"flex-wrap flex-row items-center mx-4 mt-5"}>
        <FontAwesome5 name={icon} size={30} color={colorIcon}/>
        <Text className={"pl-2 text-2xl"}>{title}</Text>
      </View>
      {title === "Incorrect" ?
        <Text className={"mx-4 mt-5 text-xl"}>Réponse correcte : {correctAnswer}</Text>
        : <View/>
      }
    </View>
  );
};

export default SnackBarComponent;
