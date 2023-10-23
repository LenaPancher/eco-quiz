import {View} from "react-native";
import {routeProps} from "../component/Navigator";
import QuestionComponent from "../component/QuestionComponent";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import {HeaderBackButton} from "@react-navigation/elements";

const Game = ({route}: routeProps) => {
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
    <View>
      <QuestionComponent level={id}/>
    </View>
  );
};

export default Game;
