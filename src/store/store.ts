import {combineReducers, configureStore} from "@reduxjs/toolkit";
import GameReducer from "./slices/GameSlice";
import thunk from "redux-thunk";
import LivesReducer from "./slices/Lives";

const rootReducer = combineReducers({
  game: GameReducer,
  lives: LivesReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunk)
});

export {store};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
