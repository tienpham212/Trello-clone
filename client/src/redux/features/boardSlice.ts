import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList } from "../../types/IList";
import initialData from "../../helper/initialData";
import { IColumn, IColumns } from "../../types/IColumn";
import { ICard } from "../../types/ICard";

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
    addNewColumn: (
      state: IList,
      action: PayloadAction<{columnTitle: string}>
    ) => {
      const columnId = `${Math.random()}`;
      const newColumn: IColumn = {
        id: columnId,
        title: action.payload?.columnTitle,
        cardOrder: [],
      };
      state.columns = {...state.columns, [columnId]: newColumn};
      state.columnOrder = [...state.columnOrder, columnId];
    },
    deleteColumn: (state: IList, action: PayloadAction<{columnId: string}>) => {
      const {columnId} = action.payload;
      const newColumnOrder = state.columnOrder.filter(
        (item) => item !== columnId
      );
      state.columnOrder = newColumnOrder;
    },
    editColumnTitle: (
      state: IList,
      action: PayloadAction<{columnId: string; editTitle: string}>
    ) => {
      const {columnId, editTitle} = action.payload;
      state.columns[columnId].title = editTitle;
    },
    addNewCardToColumn: (
      state: IList,
      action: PayloadAction<{columnId: string; cardContent: string}>
    ) => {
      const {columnId, cardContent} = action.payload;
      console.log(columnId, cardContent);

      const cardId = `${Math.random()}`;
      const newCard: ICard = {
        id: cardId,
        content: cardContent,
      };
      state.cards = {...state.cards, [cardId]: newCard};
      state.columns[columnId].cardOrder = [
        ...state.columns[columnId].cardOrder,
        cardId,
      ];
    },
  },
});
export const {
  setColumnOrder,
  setCardOrder,
  addNewColumn,
  deleteColumn,
  editColumnTitle,
  addNewCardToColumn,
} = boardSlice.actions;
export default boardSlice.reducer;