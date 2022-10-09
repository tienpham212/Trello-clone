import columnSchema from "src/schemas/columnSchema";

export const create = {
  handler: `src/handlers/columnHandler.create`,
  events: [
    {
      http: {
        method: "post",
        path: "/createColumn",
        cors: true,
        request: {
          schemas: {
            "application/json": columnSchema,
          },
        },
      },
    },
  ],
};

export const getAll = {
  handler: `src/handlers/columnHandler.getAll`,
  events: [
    {
      http: {
        method: "get",
        cors: true,
        path: "/",
      },
    },
  ],
};

export const getOne = {
  handler: `src/handlers/columnHandler.getOne`,
  events: [
    {
      http: {
        method: "post",
        cors: true,
        path: "/",
        request: {
          schemas: {
            "application/json": {
              type: "object",
              properties: {id: {type: "string"}},
            },
          },
        },
      },
    },
  ],
};


export const deleteCol = {
  handler: `src/handlers/columnHandler.deleteCol`,
  events: [
    {
      http: {
        method: "post",
        path: "/deleteCol",
        cors: true,
        request: {
          schemas: {
            "application/json": {
              type: "object",
              properties: {id: {type: "string"}},
            },
          },
        },
      },
    },
  ],
};

