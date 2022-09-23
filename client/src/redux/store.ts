import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import boardReducer from "./features/boardSlice"
import logger from "redux-logger";
import LogRocket from "logrocket";

console.log(boardReducer);

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    board: boardReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger,LogRocket.reduxMiddleware()),
});

export type RootState = ReturnType<typeof store.getState>;
