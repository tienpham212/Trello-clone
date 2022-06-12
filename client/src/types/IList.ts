import { IColumn } from "./IColumn";

export interface IList {
    id: string,
    columnOrder: string[] | string,
    columns: IColumn[],
}