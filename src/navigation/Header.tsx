import {Text, View} from "react-native";
import HeaderButton from "./HeaderButton";
import {Octicons, Entypo, FontAwesome5} from "@expo/vector-icons";
import ProgressBar from "../component/ProgressBar";

export type headerProps = {
  currentModule: number;
  totalModule: number;
};

const Header = ({currentModule, totalModule}: headerProps) => {
  return (
    <View
      className="justify-end h-[180px] p-4 pl-4 pr-4"
      style={{
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.3,
        elevation: 3,
        borderRadius: 20
      }}
    >
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
      <Text className="self-center front-bold text-lg">
        {" "}
        Module {currentModule}{" "}
      </Text>
      <View className="flex-row self-center justify-around w-full items-center mt-2 mb-4">
        <FontAwesome5 name="crown" size={24} color="gold" />
        <ProgressBar
          currentStep={currentModule}
          totalStep={totalModule}
          width={250}
        />
        <Text style={{color: "darkgray"}} className="font-bold">
          {" "}
          {currentModule} / {totalModule}{" "}
        </Text>
      </View>
      <View
        className="w-24 h-1 self-center bg-[#d7d7d7]"
      />
    </View>
  );
};

export default Header;
