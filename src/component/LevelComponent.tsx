import {Image, Pressable, View} from "react-native";

export type levelComponentProps = {
  onPress: () => void;
  img: string;
};

const LevelComponent = ({onPress, img}: levelComponentProps) => {
  return (
    <View className="my-2">
      <Pressable
        className="h-[140px] w-[140px] bg-[#336D68] rounded-full justify-center items-center"
        onPress={onPress}
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
