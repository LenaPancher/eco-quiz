import {Text, View} from "react-native";
import {useState} from "react";
import {QUESTIONS} from "../utils/questions";
import ButtonComponent from "./ButtonComponent";
import AnswerComponent from "./AnswerComponent";
import {useNavigation} from "@react-navigation/native";

interface QuestionComponent {
  level: number;
}

const QuestionComponent = ({level}: QuestionComponent) => {
  const navigation = useNavigation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const currentLevel = QUESTIONS[level - 1];
  const currentQuestion = currentLevel.questions[currentQuestionIndex];

  const handleAnswer = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);

    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log(score);
      navigation.navigate("Home");
    }
  };

  return (
    <View className={"bg-[#FFFFFF] h-full"}>
      <View className={"mx-4 flex-1"}>
        <Text className={"my-7 text-2xl"}>{currentQuestion.question}</Text>
        <View className={"flex-1 justify-around"}>
          <AnswerComponent questionItem={currentQuestion} onPress={handleAnswer} selectedOption={selectedOption}/>
          <ButtonComponent onPress={handleNextQuestion} title={"Valider"} selectedOption={selectedOption}/>
        </View>
      </View>
    </View>
  );
};

export default QuestionComponent;
