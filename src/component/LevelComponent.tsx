import React from "react";
import {Image, ImageSourcePropType, Pressable, View} from "react-native";

export type levelComponentProps = {
  onPress: () => void;
  img: ImageSourcePropType;
  isDisabled: boolean;
  isDone: boolean;
};

const LevelComponent = ({onPress, img, isDisabled, isDone}: levelComponentProps) => {
  return (
    <View className="my-3">
      <Pressable
        className="h-[140px] w-[140px] rounded-full justify-center items-center"
        onPress={onPress}
        disabled={isDisabled}
        style={isDisabled ? {backgroundColor: "gray"} : isDone ? {backgroundColor: "#15DF11"} : {backgroundColor: "gold"}}
      >
        <View
          className="h-[120px] w-[120px] bg-[#419677] rounded-full justify-center items-center"
          style={{borderColor: "white", borderWidth: 6, borderStyle: "solid"}}
        >
          <Image source={img} className="h-full w-full rounded-full"/>
        </View>
      </Pressable>
    </View>
  );
};

export default LevelComponent;
