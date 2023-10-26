import React from "react";
import {View, Text} from "react-native";
import {LivesState} from "../store/slices/Lives";

export type headerButtonProps = {
  icon: React.ReactNode;
  totalRemaining: LivesState | {value: number};
  textColor: string;
};

const HeaderButton = ({
  icon,
  totalRemaining,
  textColor
}: headerButtonProps) => {
  return (
    <View className="flex-row items-center">
      {icon}
      <Text style={{color: textColor}} className="font-semibold ml-1">
        {totalRemaining.value}
      </Text>
    </View>
  );
};

export default HeaderButton;
