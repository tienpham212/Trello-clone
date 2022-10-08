import { IColumn } from "../types/IColumn";
import {v4 as uuidv4} from "uuid";
import API from "./APIServices";
import boardSlice from "../redux/features/boardSlice";
import { EStatus } from "../types/EStatus";

class columnServices {

    public static mapDataToRequest(column: IColumn) {
        return {
            name: {
                id : column.id,
                title: column.title,
                cardOrder: column.cardOrder,
            }
        }
    }

    public static async addColumn(title: string , dispatch: any) {
          const column: IColumn = {
            id: uuidv4(),
            cardOrder: [],
            title: title,
          };
          const mappedData = columnServices.mapDataToRequest(column);
          const response = await API.post(mappedData, "createColumn");
          // if (response.status === EStatus.SUCCESS) {
          //   dispatch(boardSlice.actions.addNewColumn({column}));
          // } else {
          //   throw new Error("Unexpected Error create column");
          // }
    }

}

export default columnServices