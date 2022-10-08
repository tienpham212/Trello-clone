export interface IColumn {
  id: string,
  title: string,
  cardOrder: string[],
}

export interface IColumns {
  [key: string]: IColumn;
}
