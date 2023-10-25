import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Level} from "../../utils/questions";


const initialState: Level[] = [];

export const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    populateGames: (state, action: PayloadAction<Level[]>) => {
      state = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const {populateGames} = GameSlice.actions;

export default GameSlice.reducer;
