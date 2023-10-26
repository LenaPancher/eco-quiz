import {Text, TouchableOpacity, View} from "react-native";
import {QuestionItem} from "../store/slices/GameSlice";
import React from "react";

interface AnswerComponentProps {
  questionItem: QuestionItem;
  onPress: (params: string) => void;
  selectedOption: string | null;
  colorSelectedOption?: string;
}

const AnswerComponent = ({questionItem, onPress, selectedOption, colorSelectedOption}: AnswerComponentProps) => {
  return (
    <View className={"flex-row flex-wrap pb-4 mx-2"}>
      {questionItem.options.map((option, index) => (
        <View className={"w-1/2 p-2"} key={index}>
          <TouchableOpacity
            className="w-100 h-36 rounded-md justify-center px-4"
            onPress={() => onPress(option)}
            style={{backgroundColor: selectedOption === option ? `${colorSelectedOption}` : "#CDCCCC"}}
          >
            <Text className={"text-center text-xl text-[#FFFFFF]"}>{option}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default AnswerComponent;
