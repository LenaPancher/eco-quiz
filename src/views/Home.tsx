import {View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";
import {useAppSelector} from "../store/hooks";
import {useCallback} from "react";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();
  const game = useAppSelector((state) => state.game.game);

  const handleGoingToGame = useCallback((level_id: number) => {
    navigation.navigate("Game", {
      id: level_id
    });
  }, []);


  return (
    <View className="flex-1 items-center bg-[#FFFFFF] h-full">
      {game.map(({level}, index) => (
        <LevelComponent
          key={index}
          img={world}
          onPress={() => handleGoingToGame(level)}
        />
      ))}
    </View>
  );
};

export default Home;
