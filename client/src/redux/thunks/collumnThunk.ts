import boardSlice from "../features/boardSlice";
import { IColumn } from "../../types/IColumn";
import columnServices from "../../services/columnServices";
import API from "../../services/APIServices";


 export const  addColumnThunk = (title: string) => {
    return async (dispatch, getState) => {
        try {
            if(!title) throw new Error("No title provided");
            await columnServices.addColumn(title, dispatch);
        } catch (error) {
            console.log(error)
        }
  };
}

export const getAllColumns = () => {

}



