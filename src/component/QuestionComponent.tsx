import {Image, Text, View} from "react-native";
import {useEffect, useState} from "react";
import ButtonComponent from "./ButtonComponent";
import AnswerComponent from "./AnswerComponent";
import {CommonActions, useNavigation} from "@react-navigation/native";
import world from "../../assets/Images/world.png";
import {NavigationGameProps} from "../navigation/Navigator";
import {useAppSelector} from "../store/hooks";
import SnackBarComponent from "./SnackBarComponent";

interface QuestionComponent {
  level: number;
}

const TITLE_BUTTON_CORRECT = "Continuer";
const TITLE_BUTTON_INCORRECT = "D'accord";
const TITLE_BUTTON_CHECK_ANSWER = "Valider";

const COLOR_GREEN = "#15DF11";
const COLOR_RED = "#EF0C0C";

const QuestionComponent = ({level}: QuestionComponent) => {
  const navigation = useNavigation<NavigationGameProps>();
  const game = useAppSelector((state) => state.game.game);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [currentIndexQuestionDisplay, setCurrentIndexQuestionDisplay] = useState(0);
  const [colorTitleButton, setColorTitleButton] = useState(COLOR_GREEN);
  const [titleButton, setTitleButton] = useState(TITLE_BUTTON_CHECK_ANSWER);
  const [colorSelectedOption, setColorSelectedOption] = useState(COLOR_GREEN);

  const currentLevel = game[level - 1];
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
              nbQuestion: currentLevel.questions.length,
              id: level
            }
          }
        ]
      }));
    }
  }, [currentIndexQuestionDisplay]);

  const handleNextQuestion = () => {
    setColorSelectedOption(COLOR_GREEN);
    setTitleButton(TITLE_BUTTON_CHECK_ANSWER);
    setColorTitleButton(COLOR_GREEN);

    // Isn't the last question
    if (currentQuestionIndex < currentLevel.questions.length - 1) {
      setCurrentQuestionIndex((prevCurrentQuestionIndex) => prevCurrentQuestionIndex + 1);
    }

    setCurrentIndexQuestionDisplay((prevCurrentIndexQuestionDisplay) => prevCurrentIndexQuestionDisplay + 1);
    setSelectedOption(null);

  };

  const handleCheckAnswer = () => {
    if (selectedOption !== currentQuestion.correctAnswer) {
      setColorSelectedOption(COLOR_RED);
      setTitleButton(TITLE_BUTTON_INCORRECT);
      setColorTitleButton(COLOR_RED);
    } else {
      setTitleButton(TITLE_BUTTON_CORRECT);
      setScore((prevScore) => prevScore + 1);
    }
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
        <AnswerComponent questionItem={currentQuestion} onPress={handleAnswer} selectedOption={selectedOption}
          colorSelectedOption={colorSelectedOption}/>
        {titleButton == TITLE_BUTTON_CORRECT &&
          <SnackBarComponent bg={"#CBFCCA"} height={"36"} title={"Super !"} icon={"check-circle"}
            colorIcon={COLOR_GREEN}/>
        }
        {titleButton == TITLE_BUTTON_INCORRECT &&
          <SnackBarComponent bg={"#FDCACA"} height={"1/2"} title={"Incorrect"} icon={"times-circle"}
            colorIcon={COLOR_RED} correctAnswer={currentQuestion.correctAnswer}/>
        }
        <ButtonComponent onPress={titleButton === "Valider" ? handleCheckAnswer : handleNextQuestion}
          title={titleButton} selectedOption={selectedOption}
          bg={colorTitleButton}/>
      </View>
    </View>
  );
};

export default QuestionComponent;
