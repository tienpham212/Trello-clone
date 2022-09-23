import columnSchema from "src/schemas/columnSchema";

export const create =  {
  handler: `src/handlers/columnHandler.create`,
  events: [
    {
      http: {
        method: "post",
        path: "/createColumn",
        request: {
          schemas: {
            "application/json": columnSchema,
          },
        },
      },
    },
  ],
};
