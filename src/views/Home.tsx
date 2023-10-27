import {ActivityIndicator, FlatList, Modal, Pressable, Text, TouchableWithoutFeedback, View} from "react-native";
import LevelComponent from "../component/LevelComponent";
import {useNavigation} from "@react-navigation/native";
import {MyNavigationProp} from "../navigation/Navigator";
import world from "../../assets/Images/world.png";
import React, {useState} from "react";
import useCurrentLevel from "../hooks/useCurrentLevel";
import topics from "../../topics.json";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {populateGame} from "../store/slices/GameSlice";

const Home = () => {
  const navigation = useNavigation<MyNavigationProp>();
  const currentLevel = useCurrentLevel();
  const isLoading = useAppSelector((state) => state.game.isLoading);
  const isCreated = useAppSelector((state) => state.game.isCreated);
  const [level, setLevel] = useState<Level>();
  const game = useAppSelector((state) => state.game.game);
  const error = useAppSelector((state) => state.game.error);
  const dispatch = useAppDispatch();
  // console.log("isloading = " + isLoading);
  // console.log("iscreated = " + isCreated);
  // console.log("game = " + game);
  // console.log("error = " + error);


  const handleGoingToGame = async (topic: string) => {
    console.log("yo");
    try {
      const response = await fetch(`http://172.20.10.2:3000/api/quizz/random?theme=${topic}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data.quizz);
      setLevel({...level, topic: topic, questions});
      populateGame(quizz);
    } catch (err) {
      console.log(err);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  if (isLoading)
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="darkgreen"/>
      </View>
    );

  return (
    <View className="flex-1 items-center bg-[#FFFFFF] h-full">
      <FlatList
        data={topics}
        className="self-center mt-6 mb-2"
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
            >
              <LevelComponent
                img={world}
                onPress={() => setModalVisible(true)}
                isDisabled={item.id > currentLevel + 1}
              />
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                className=""
              >
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                  <View className=" mb-7 flex-1 justify-end items-center w-400">
                    <View className="w-96 p-4 bg-[#15DF11] rounded-lg shadow-md">
                      <Text className="text-start text-[#ffffff] font-bold text-lg">
                        {item.topic}
                      </Text>
                      <Text className="mb-4 text-start text-[#ffffff]">
                        Vous allez gagner des connaissances sur {item.description}.
                      </Text>
                      <Pressable
                        className="rounded-lg bg-[#ffffff]"
                        onPress={() => handleGoingToGame(item.topic)}
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
          );
        }}
      />
    </View>
  );
};

export default Home;
