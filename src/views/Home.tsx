import {View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../component/Navigator";
import world from "../../assets/Images/world.png";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();

  const handleGoingToGame = () => {
    navigation.navigate("Game", {
      id: 23
    });
  };

  return (
    <View className="flex-1 items-center">
      <LevelComponent img={world} onPress={handleGoingToGame} />
    </View>
  );
};

export default Home;
