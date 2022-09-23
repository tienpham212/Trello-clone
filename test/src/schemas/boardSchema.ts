// import {IList} from "../types/IList";

import cardSchema from "./cardSchema";
import columnSchema from "./columnSchema";

// const initialData: IList = {
//   cards: {
//     "task-1": {id: "task-1", content: "Take out the garbage"},
//     "task-2": {id: "task-2", content: "Watch my favorite show"},
//     "task-3": {id: "task-3", content: "Charge my phone"},
//     "task-4": {id: "task-4", content: "Cook dinner"},
//   },
//   columns: {
//     "column-1": {
//       id: "column-1",
//       title: "To do",
//       cardOrder: ["task-1", "task-2", "task-3", "task-4"],
//     },
//     "column-2": {
//       id: "column-2",
//       title: "In progress",
//       cardOrder: [],
//     },
//   },
//   // Facilitate reordering of the columns
//   columnOrder: ["column-1", "column-2"],
// };

// export default initialData;

export default {
  type: "object",
  properties: {
    cards: {
        type: "array",
        items: cardSchema,
    },
    columns: {
        type: "array",
        items: columnSchema
    },
    columnOrder: {
        type: "array",
        items: {type: "string"}
    },
  },
  required: ["cards", "columns", "columnOrder"],
} as const;
