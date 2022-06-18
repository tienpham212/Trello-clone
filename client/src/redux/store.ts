import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice"
import boardReducer from "./features/boardSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
  },
});
