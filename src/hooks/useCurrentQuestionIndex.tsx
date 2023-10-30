import {useState} from "react";

function useCurrentQuestionIndex() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return {currentQuestionIndex, setCurrentQuestionIndex};
}

export default useCurrentQuestionIndex;

