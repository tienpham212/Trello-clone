import type {ValidatedEventAPIGatewayProxyEvent} from "@libs/api-gateway";
import {formatJSONResponse} from "@libs/api-gateway";
import {middyfy} from "@libs/lambda";
import columnSchema from "src/schemas/columnSchema";


const createColumns: ValidatedEventAPIGatewayProxyEvent<typeof columnSchema> = async (event) => {
  return formatJSONResponse({
    message: "Test",
    event,
  });
};

export const create = middyfy(createColumns);
