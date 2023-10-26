import {combineReducers, configureStore} from "@reduxjs/toolkit";
import GameReducer from "./slices/GameSlice";

const rootReducer = combineReducers({
  game: GameReducer
});

const store = configureStore({
  reducer: rootReducer
});

export {store};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
