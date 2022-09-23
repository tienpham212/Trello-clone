export default {
  type: "object",
  properties: {
    name: {
      type: "object",
      properties: {
        id: {type: "string"},
        title: {type: "string"},
        cardOrder: {
          type: "array",
          items: {type: "string"},
        },
      },
    },
  },
  //   required: ["name", "name.id", "name.title", "name.cardOrder"],
} as const;