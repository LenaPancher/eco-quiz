import {Text, View} from "react-native";
import {routeProps} from "../navigation/Navigator";

const Game = ({route}: routeProps) => {
  const {id} = route.params;
  return (
    <View>
      <Text> Game {id} </Text>
    </View>
  );
};

export default Game;
