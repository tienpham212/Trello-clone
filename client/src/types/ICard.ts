export interface ICard {
  id: string,
  content: string,
}

export interface ICards {
  [key : string] : ICard,
}