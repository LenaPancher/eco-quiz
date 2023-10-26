import {useState, useEffect} from "react";
import {Level} from "../store/slices/GameSlice";

function useCurrentLevel(game: Level[]): number {
  const [currentLevel, setCurrentLevel] = useState(0);

  const findLastGameDone = (arr: Level[]) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].isDone) {
        setCurrentLevel(i);
        return;
      }
    }
  };

  useEffect(() => {
    findLastGameDone(game);
  }, [game]);

  return currentLevel;
}

export default useCurrentLevel;
