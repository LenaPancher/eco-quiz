import {Text, View} from "react-native";
import HeaderButton from "./HeaderButton";
import {Octicons, Entypo, FontAwesome5} from "@expo/vector-icons";

export type headerProps = {
  currentModule: number;
  totalModule: number;
};

const Header = ({currentModule, totalModule}: headerProps) => {
  return (
    <View className="justify-end h-[150px] p-2 pl-4 pr-4">
      <View className="flex-row items-center justify-between">
        <HeaderButton
          icon={<Octicons name="flame" size={24} color="orange" />}
          textColor="orange"
          totalRemaining={4}
        />
        <HeaderButton
          icon={<Entypo name="heart" size={24} color="crimson" />}
          textColor="crimson"
          totalRemaining={3}
        />
      </View>
      <Text className="self-center"> Module {currentModule} </Text>
      <View className="flex-row self-center mt-2 mb-4 items-center">
        <FontAwesome5 name="crown" size={24} color="gold" />
        <View
          className="w-8/12 h-1 bg-[#b8860b]"
        />
        <Text> {currentModule} / {totalModule} </Text>
      </View>
    </View>
  );
};

export default Header;
