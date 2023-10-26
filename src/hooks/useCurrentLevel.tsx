import {useState, useEffect} from "react";
import {Level} from "../store/slices/GameSlice";
import {useAppSelector} from "../store/hooks";

function useCurrentLevel(): number {
  const [currentLevel, setCurrentLevel] = useState(0);
  const game = useAppSelector((state) => state.game.game);

  const findLastGameDone = (arr: Level[]) => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].isDone) {
        setCurrentLevel(i + 1);
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
