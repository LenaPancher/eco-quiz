import {View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import recycle from "../../assets/Images/recycle.jpeg";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../component/Navigator";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();

  const handleGoingToGame = () => {
    navigation.navigate("Game", {
      id: 23
    });
  };

  return (
    <View className="flex-1 items-center">
      <LevelComponent img={recycle} onPress={handleGoingToGame} />
    </View>
  );
};

export default Home;
