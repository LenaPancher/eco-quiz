import {View, Modal, Text, Pressable} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";
import {useAppSelector} from "../store/hooks";
import React, {useCallback, useState} from "react";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();
  const game = useAppSelector((state) => state.game);

  const handleGoingToGame = useCallback((level_id: number) => {
    navigation.navigate("Game", {
      id: level_id
    });
    setModalVisible(!modalVisible);


  }, []);
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View className="flex-1 items-center bg-[#FFFFFF] h-full">
      {game.map(( {level, title, description}, index) => (
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
          >
            <View className="mb-3 flex-1 justify-end items-center">
              <View className="m-3 bg-[#15DF11] rounded-lg p-5 text-center shadow-md">
                <Text className="mb-4 text-start text-[#ffffff] font-bold text-lg">
                  {title}
                </Text>
                <Text className="mb-4 text-start text-[#ffffff]">
                  {description}
                </Text>
                <Pressable
                  className="p-4 rounded-lg bg-[#ffffff]"
                  onPress={() => handleGoingToGame(level)}
                >
                  <Text className="bg-blue text-[#15DF11] font-bold text-center w-250">
                    COMMENCER
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </>
      ))}
    </View>
  );
};

export default Home;
