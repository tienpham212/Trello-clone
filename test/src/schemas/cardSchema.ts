export default {
  type: "object",
  properties: {
    name: {
        type: "object",
        proproperties: {
            id: {type: "string"},
            content: {type: "string"},
        }
    },
  },
//   required: ["name", "name.id" , "name.content"],
} as const;
