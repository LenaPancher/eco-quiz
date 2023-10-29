import {Modal, Pressable, Text, TouchableWithoutFeedback, View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";
import {useAppSelector} from "../store/hooks";
import React, {useCallback, useState} from "react";
import useCurrentLevel from "../hooks/useCurrentLevel";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();
  const game = useAppSelector((state) => state.game.game);
  const [modalVisible, setModalVisible] = useState<number | null>(null);
  const currentLevel = useCurrentLevel();

  const handleGoingToGame = useCallback((level_id: number) => {
    setModalVisible(null);
    navigation.navigate("Game", {
      id: level_id
    });
  }, []);

  return (
    <View className="flex-1 items-center bg-[#FFFFFF] h-full">
      {game.map(({level, title, description, isDone}, index) => (
        <View
          key={index}
        >
          <LevelComponent
            img={world}
            onPress={() => setModalVisible(index)}
            isDisabled={level > currentLevel + 1}
            isDone={isDone}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={index == modalVisible}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(null)}>
              <View className=" mb-7 flex-1 justify-end items-center w-400">
                <View className="w-96 p-4 bg-[#15DF11] rounded-lg shadow-md">
                  <Text className="text-start text-[#ffffff] font-bold text-lg">
                    {title}
                  </Text>
                  <Text className="mb-4 text-start text-[#ffffff]">
                    {description}
                  </Text>
                  <Pressable
                    className="rounded-lg bg-[#ffffff]"
                    onPress={() => handleGoingToGame(level)}
                  >
                    <Text className="p-3 bg-blue text-[#15DF11] font-bold text-center">
                      COMMENCER
                    </Text>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      ))}
    </View>
  );
};

export default Home;
