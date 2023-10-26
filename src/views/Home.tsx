import {View, Modal, Text, Pressable, TouchableWithoutFeedback} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";
import {useAppSelector} from "../store/hooks";
import React, {useCallback, useState} from "react";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();
  const game = useAppSelector((state) => state.game);

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleGoingToGame = useCallback((level_id: number) => {
    navigation.navigate("Game", {
      id: level_id
    });
    closeModal();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);

  

  return (
    <View className="flex-1 items-center bg-[#FFFFFF] h-full">
      {game.map(({level, title, description}, index) => (
        <>
          <LevelComponent
            key={index}
            img={world}
            onPress={() => setModalVisible(true)}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            className=""
          >
            <TouchableWithoutFeedback onPress={closeModal}>
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
        </>
      ))}
    </View>
  );
};

export default Home;
