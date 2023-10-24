import {Text, TouchableOpacity, View} from "react-native";
import {QuestionItem} from "../utils/questions";

interface AnswerComponentProps {
  questionItem: QuestionItem;
  onPress: (params: string) => void;
  selectedOption: string | null;
}

const AnswerComponent = ({questionItem, onPress, selectedOption}: AnswerComponentProps) => {
  return (
    <View className={"flex flex-row flex-wrap"}>
      {questionItem.options.map((option, index) => (
        <View className={"w-1/2 p-2"} key={index}>
          <TouchableOpacity
            className="w-100 h-36 rounded-md justify-center"
            onPress={() => onPress(option)}
            style={{backgroundColor: selectedOption === option ? "#15DF11" : "#CDCCCC"}}
          >
            <Text className={"text-center text-xl basis-[20] text-[#FFFFFF]"}>{option}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default AnswerComponent;
