import {SafeAreaView} from "react-native";
import QuestionComponent from "../component/QuestionComponent";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {HeaderBackButton} from "@react-navigation/elements";
import {routeGameProps} from "../navigation/Navigator";

const Game = ({route}: routeGameProps) => {
  const navigation = useNavigation();
  const {id} = route.params;

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={handleBackButtonPress}
        />
      )
    });
  }, [navigation]);

  return (
    <SafeAreaView className={"bg-[#FFFFFF]"}>
      <QuestionComponent level={id}/>
    </SafeAreaView>
  );
};

export default Game;
