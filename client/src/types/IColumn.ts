import { ICard } from "./ICard";

export interface IColumn {
  id: string;
  boardId: string;
  title: string;
  cardOrder: string[] | string;
  cards: ICard[];
}