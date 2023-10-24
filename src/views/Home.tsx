import {View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";
import {QUESTIONS} from "../utils/questions";

// TODO FAIRE UNE PROGRESS BAR

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();

  const handleGoingToGame = (level_id: number) => {
    console.log("navigate : " + level_id);
    navigation.navigate("Game", {
      id: level_id
    });
  };

  return (
    <View className="flex-1 items-center bg-[#FFFFFF] h-full">
      {QUESTIONS.map(({level}, index) =>
        <LevelComponent key={index} img={world} onPress={() => handleGoingToGame(level)}/>
      )}
    </View>
  );
};

export default Home;
