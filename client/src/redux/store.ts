import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import boardReducer from "./features/boardSlice"
import logger from "redux-logger";
import LogRocket from "logrocket";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger,LogRocket.reduxMiddleware()),
});

export type RootState = ReturnType<typeof store.getState>;
