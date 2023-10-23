import {Button, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {QUESTIONS} from "../utils/questions";

interface QuestionComponent {
  level: number;
}

const QuestionComponent = ({level}: QuestionComponent) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentLevel = QUESTIONS[level - 1];
  const currentQuestion = currentLevel.questions[currentQuestionIndex];

  const handleAnswer = (selectedOption: string) => {
    setSelectedOption(selectedOption);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <View>
      <Text>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleAnswer(option)}
          style={{
            backgroundColor: selectedOption === option ? "green" : "white",
            padding: 10,
            margin: 5,
            borderWidth: 1,
            borderColor: "black"
          }}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
      <Button
        title="Valider"
        onPress={handleNextQuestion}
      />
    </View>
  );
};

export default QuestionComponent;
