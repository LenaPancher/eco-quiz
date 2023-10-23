import {View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import recycle from "../../assets/Images/recycle.jpeg";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../component/Navigator";
import {QUESTIONS} from "../utils/questions";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();

  const handleGoingToGame = (level_id: number) => {
    console.log("navigate : " + level_id);
    navigation.navigate("Game", {
      id: level_id
    });
  };

  return (
    <View className="flex-1 items-center">
      {QUESTIONS.map(({level}, index) =>
        <LevelComponent key={index} img={recycle} onPress={() => handleGoingToGame(level)}/>
      )}
    </View>
  );
};

export default Home;
