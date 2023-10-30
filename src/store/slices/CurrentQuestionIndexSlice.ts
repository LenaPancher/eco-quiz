import {createSlice} from "@reduxjs/toolkit";

export interface CurrentQuestionIndexState {
  value: number;
}

const initialState: CurrentQuestionIndexState = {
  value: 0
};

export const CurrentQuestionIndexSlice = createSlice({
  name: "CurrentQuestionIndex",
  initialState,
  reducers: {
    incrementCurrentQuestionIndexState: (state) => {
      state.value += 1;
    },
    restartCurrentQuestionIndexState: (state) => {
      state.value = 0;
    }
  }
});

export const {incrementCurrentQuestionIndexState, restartCurrentQuestionIndexState} = CurrentQuestionIndexSlice.actions;

export default CurrentQuestionIndexSlice.reducer;

