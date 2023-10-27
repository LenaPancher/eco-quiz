import {createSlice} from "@reduxjs/toolkit";

export type Level = {
  id: number;
  topic: string;
  description: string;
  questions: QuestionItem[]; q;
  isDone: boolean;
};

export type QuestionItem = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const initialState = {
  isLoading: false,
  game: <Level[]>[],
  error: <null | unknown>null,
  isCreated: false
};

// export const getOneGame = createAsyncThunk(
//   "getOneGame",
//   async (topic: string, {rejectWithValue}) => {
//     const response = await fetch(`http://localhost:3000/api/quizz/random?theme=${topic}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     try {
//       const result = await response.json();
//       if (result.error) {
//         return rejectWithValue(result.error);
//       }
//       return result.quizz.questions;
//     } catch (err) {
//       return rejectWithValue("network error");
//     }
//   }
// );

export const GameSlice = createSlice({
  name: "Game",
  initialState,
  reducers: {
    populateGame: (state, action) => {
      state.game = action.payload;
    },
    updateIsDoneInGame: (state, action) => {
      const game = state.game.find((game) => game.id === action.payload);
      if (game) {
        game.isDone = true;
      }
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(getOneGame.pending, (state) => {
  //     state.isLoading = true;
  //     state.error = null;
  //     state.isCreated = false;
  //   });
  //   builder.addCase(getOneGame.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.isCreated = true;
  //     state.game = action.payload;
  //   });
  //   builder.addCase(getOneGame.rejected, (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //     state.isCreated = false;
  //   });
  // }
});

export const {populateGame, updateIsDoneInGame} = GameSlice.actions;

export default GameSlice.reducer;

