import {View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";

// TODO FAIRE UNE PROGRESS BAR

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();

  const handleGoingToGame = () => {
    navigation.navigate("Game", {
      id: 23
    });
  };

  return (
    <View className="flex-1 items-center p-4">
      <LevelComponent img={world} onPress={handleGoingToGame} />
    </View>
  );
};

export default Home;
