import {Image, SafeAreaView, Text, View} from "react-native";
import world from "../../assets/Images/world.png";
import ScoreComponent from "../component/ScoreComponent";
import ButtonComponent from "../component/ButtonComponent";
import {CommonActions, useNavigation} from "@react-navigation/native";

const Score = () => {
  const navigation = useNavigation();

  const handleResetHome = () => {
    navigation.dispatch(CommonActions.reset({
      index: 1,
      routes: [
        {name: "Home"}
      ]
    }));
  };

  return (
    <SafeAreaView className={"bg-[#FFFFFF] w-full h-full justify-between"}>
      <View className={"flex-1 justify-center"}>
        <Image source={world} className={"self-center"}/>
      </View>
      <View className={"flex-1"}>
        <Text className={"color-[#FEE81F] text-center text-3xl mb-10"}>Leçon terminée !</Text>
        <View className={"flex-wrap flex-row justify-center"}>
          <ScoreComponent bg={"#FEE81F"} ml={"ml-4"} mr={"mr-2"} title={"Réussite"} colorSubTitle={"#FEE81F"}
            icon={"crown"}/>
          <ScoreComponent bg={"#15DF11"} mr={"mr-4"} ml={"ml-2"} title={"Précision"} colorSubTitle={"#15DF11"}
            icon={"bullseye"}/>
        </View>
      </View>
      <ButtonComponent onPress={handleResetHome} title={"Continuer"} bg={"#01B3FF"}/>
    </SafeAreaView>
  );
};

export default Score;
