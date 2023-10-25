import {View} from "react-native";

export type progressBarType = {
  currentStep: number;
  totalStep: number;
  width: number;
  backgroundColor: string;
};

const ProgressBar = ({
  currentStep,
  totalStep,
  width,
  backgroundColor
}: progressBarType) => {
  const eachStepSize = width / totalStep;
  const steps = [];
  for (let i = 1; i <= totalStep; i++) {
    const stepStyle = i <= currentStep ? backgroundColor : "lightgray";
    steps.push(
      <View
        key={i}
        className={`h-4
        ${i < 2 ? "rounded-l-lg" : ""}
        ${i === totalStep ? "rounded-r-lg" : ""}
        `}
        style={{width: eachStepSize, backgroundColor: stepStyle}}
      />
    );
  }

  return (
    <View className="h-4 flex-row" style={{width: width}}>
      {steps}
    </View>
  );
};

export default ProgressBar;
