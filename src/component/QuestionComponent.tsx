import {Text, View} from "react-native";

interface QuestionComponent {
  question: string;
}

const QuestionComponent = ({question}: QuestionComponent) => {
  return (
    <View>
      <Text>{question}</Text>
    </View>
  );
};

export default QuestionComponent;
