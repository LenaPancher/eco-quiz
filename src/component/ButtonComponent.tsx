import {GestureResponderEvent, Text, TouchableOpacity} from "react-native";

interface ButtonComponentProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  selectedOption: string | null;
}

const ButtonComponent = ({onPress, title, selectedOption}: ButtonComponentProps) => {
  return (
    <TouchableOpacity
      className={"w-full rounded-md"}
      onPress={onPress}
      disabled={selectedOption === null}
      style={{backgroundColor: selectedOption === null ? "#CDCCCC" : "#15DF11"}}
    >
      <Text className={"text-center text-xl text-[#FFFFFF] uppercase py-4"}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
