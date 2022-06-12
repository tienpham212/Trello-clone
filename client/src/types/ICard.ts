export interface ICard {
  id:string;
  boardId: string;
  columnId: string;
  title: string;
  cover?: null | string;
}