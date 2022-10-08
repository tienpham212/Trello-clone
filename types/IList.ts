import { ICards } from "./ICard";
import { IColumns } from "./IColumn";

export interface IList {
  cards: ICards;
  columns: IColumns;
  columnOrder: string[];
}