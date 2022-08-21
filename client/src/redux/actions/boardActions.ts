import { PayloadAction } from "@reduxjs/toolkit";
import { IColumn } from "../../types/IColumn";
import { IList } from "../../types/IList";

 export const addNewColumn = (
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
    }