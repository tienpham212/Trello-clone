import type {ValidatedEventAPIGatewayProxyEvent} from "@libs/api-gateway";
import {formatJSONResponse} from "@libs/api-gateway";
import {middyfy} from "@libs/lambda";
import columnSchema from "src/schemas/columnSchema";
import { BoardServices } from "src/Service/BoardServices";

const createColumns:ValidatedEventAPIGatewayProxyEvent<typeof columnSchema> = async (event) => {
  const {id, title, cardOrder} = event.body.name;
  try {
     const addColumn = await BoardServices.addColumn(id, cardOrder, title);
     if (addColumn) {
       return formatJSONResponse({
         message: "Successfully added column ",
         addColumn,
       });
     } 
  } catch (error) {
    return formatJSONResponse({
      message: "Unexpected error create column",
      error,
    });
  }
};

const getAllColumns:ValidatedEventAPIGatewayProxyEvent<typeof columnSchema> = async (event) => {
    try {
        const results = await BoardServices.getAllColumns();
        if (results) {
          return formatJSONResponse({
            message: "Successfully get all column ",
            results,
          });
        } 
    } catch (error) {
        return formatJSONResponse({
          message: "Unexpected error get column",
          error,
        });
    }
};

const getColumn:ValidatedEventAPIGatewayProxyEvent<{type: "object", properties: {id: {type: "string"}}}> = async (event) => {
    try {
        const columnId = event.body.id;
        const data = await BoardServices.getColumn(columnId);
        if (data) {
          return formatJSONResponse({
            message: "Successfully get column ",
            data,
          });
        } 
    } catch (error) {
       console.log(error);
       
    }
};

const deleteColumn:ValidatedEventAPIGatewayProxyEvent<{type: "object", properties: {id: {type: "string"}}}> = async (event) => {
    try {
        const columnId = event.body.id;
        const data = await BoardServices.deleteColumn(columnId);
        if (data) {
          return formatJSONResponse({
            message: "Successfully delete column ",
            data,
          });
        } 
    } catch (error) {
       console.log(error);
    }
};

export const create = middyfy(createColumns);
export const getAll = middyfy(getAllColumns);
export const getOne = middyfy(getColumn);
export const deleteCol = middyfy(deleteColumn);

