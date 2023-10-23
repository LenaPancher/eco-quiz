import {View, Text} from "react-native";

export type headerButtonProps = {
  icon: React.ReactNode;
  totalRemaining: number;
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
        {" "}
        {totalRemaining}{" "}
      </Text>
    </View>
  );
};

export default HeaderButton;
