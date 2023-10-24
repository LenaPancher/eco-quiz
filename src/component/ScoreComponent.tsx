import {Text, View} from "react-native";
import {FontAwesome5} from "@expo/vector-icons";

interface ScoreComponentProps {
  bg: string;
  ml?: string;
  mr?: string;
  title: string;
  colorSubTitle: string;
  icon: string;
}

const ScoreComponent = ({bg, ml, mr, title, colorSubTitle, icon}: ScoreComponentProps) => {
  return (
    <View className={"w-1/2"}>
      <View className={`w-100 h-36 ${ml} ${mr} rounded-xl p-2 justify-between`} style={{backgroundColor: bg}}>
        <Text className={"uppercase text-[#FFFFFF] text-center text-2xl"}>{title}</Text>
        <View className={"w-full h-24 rounded-xl justify-center"} style={{backgroundColor: "white"}}>
          <Text className={`text-[\`${colorSubTitle}\`] text-center text-2xl py-2`}>
            <FontAwesome5 name={icon} size={24} color={bg}/>
            Score
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ScoreComponent;
