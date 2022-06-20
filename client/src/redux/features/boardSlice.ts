import { createSlice } from "@reduxjs/toolkit";
import { IList } from "../../types/IList";
import initialData from "../../helper/initialData";
import { IColumns } from "../../types/IColumn";

const initialState: IList = initialData;

interface setCardOrderAction {
    columnId: string;
    cardOrder : string[];
}

type boardAction  = setCardOrderAction

const boardSlice = createSlice({
  initialState,
  name: "boardSlice",
  reducers: {
    setColumnOrder: (state: IList, action: {payload: string[]}) => {
      state.columnOrder = action.payload;
    },
    setCardOrder: (state: IList, action: {payload: boardAction[]}) => {
      for (let item of action.payload) {
        state.columns[item.columnId].cardOrder = item.cardOrder;
      }
    },
  },
});
export const {setColumnOrder, setCardOrder} = boardSlice.actions;
export default boardSlice.reducer;