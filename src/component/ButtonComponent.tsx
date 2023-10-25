import {GestureResponderEvent, Text, TouchableOpacity, View} from "react-native";

interface ButtonComponentProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  selectedOption?: string | null;
  bg?: string;
}

const ButtonComponent = ({onPress, title, selectedOption, bg}: ButtonComponentProps) => {
  return (
    <View className={"mx-4 mb-4"} style={{zIndex: 2}}>
      <TouchableOpacity
        className={"w-full rounded-md"}
        onPress={onPress}
        disabled={selectedOption === null}
        style={{backgroundColor: selectedOption === null ? "#CDCCCC" : `${bg}`}}
      >
        <Text className={"text-center text-xl text-[#FFFFFF] uppercase py-4"}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
