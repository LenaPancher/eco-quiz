import {Image, Text, View} from "react-native";
import {useEffect, useState} from "react";
import {QUESTIONS} from "../utils/questions";
import ButtonComponent from "./ButtonComponent";
import AnswerComponent from "./AnswerComponent";
import {CommonActions, useNavigation} from "@react-navigation/native";
import world from "../../assets/Images/world.png";
import {NavigationGameProps} from "../navigation/Navigator";

interface QuestionComponent {
  level: number;
}

const QuestionComponent = ({level}: QuestionComponent) => {
  const navigation = useNavigation<NavigationGameProps>();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [currentIndexQuestionDisplay, setCurrentIndexQuestionDisplay] = useState(0);

  const currentLevel = QUESTIONS[level - 1];
  const currentQuestion = currentLevel.questions[currentQuestionIndex];

  const handleAnswer = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    if (currentIndexQuestionDisplay === currentLevel.questions.length) {
      navigation.dispatch(CommonActions.reset({
        index: 1,
        routes: [
          {
            name: "Score",
            params: {
              score: score,
              nbQuestion: currentLevel.questions.length
            }
          }
        ]
      }));
    }
  }, [currentIndexQuestionDisplay]);

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    // Isn't the last question
    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex((prevCurrentQuestionIndex) => prevCurrentQuestionIndex + 1);
    }

    setCurrentIndexQuestionDisplay((prevCurrentIndexQuestionDisplay) => prevCurrentIndexQuestionDisplay + 1);
    setSelectedOption(null);

  };

  return (
    <View className={"bg-[#FFFFFF] h-full"}>
      <View className={"mx-4"}>
        <Text className={"mt-7 text-2xl"}>{currentQuestion.question}</Text>
        <View className="w-24 h-[1] bg-[#d7d7d7] my-2"/>
      </View>
      <View className={"flex-1 items-center justify-center"}>
        <Image source={world}/>
      </View>
      <View className={"flex-2"}>
        <AnswerComponent questionItem={currentQuestion} onPress={handleAnswer} selectedOption={selectedOption}/>
        <ButtonComponent onPress={handleNextQuestion} title={"Valider"} selectedOption={selectedOption}
          bg={"#15DF11"}/>
      </View>
    </View>
  );
};

export default QuestionComponent;
