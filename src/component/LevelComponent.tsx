import {Image, Pressable, View} from "react-native";

export type levelComponentProps = {
  onPress: () => void;
  img: string;
};

const LevelComponent = ({onPress, img}: levelComponentProps) => {
  return (
    <Pressable
      className="h-[160px] w-[160px] bg-[#336D68] rounded-full justify-center items-center"
      onPress={onPress}
    >
      <View
        className="h-[130px] w-[130px] bg-[#419677] rounded-full justify-center items-center"
        style={{borderColor: "white", borderWidth: 6, borderStyle: "solid"}}
      >
        <Image source={img} className="h-2/3 w-2/3 rounded-full" />
      </View>
    </Pressable>
  );
};

export default LevelComponent;
