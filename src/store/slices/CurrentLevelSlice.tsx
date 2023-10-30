import {createSlice} from "@reduxjs/toolkit";

export interface CurrentLevelState {
  value: number;
}

const initialState: CurrentLevelState = {
  value: 1
};

export const CurrentLevelSlice = createSlice({
  name: "CurrentLevel",
  initialState,
  reducers: {
    incrementCurrentLevelState: (state) => {
      state.value += 1;
    },
    restartCurrentLevelState: (state) => {
      state.value = 1;
    }
  }
});

export const {incrementCurrentLevelState, restartCurrentLevelState} = CurrentLevelSlice.actions;

export default CurrentLevelSlice.reducer;

