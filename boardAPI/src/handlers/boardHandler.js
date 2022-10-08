"use strict";
const AWS = require("aws-sdk");
const { Helper } = require("../util/helper");


module.exports.createBoard = async (event) => {
  const body = JSON.parse(event.body.toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  if( !body.name || !body.columnOrder) {
    return Helper.formatJSONResponse("Missing field name or column order" , 422)
  }
  const putParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      primary_key: body.name,
      columnOrder: body.columnOrder,
    },
  };
  await dynamoDb.put(putParams).promise();

  return Helper.formatJSONResponse(body, 200);
};

module.exports.getBoards = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const scanParams = {
    TableName: process.env.DYNAMODB_TABLE,
  };
  const result = await dynamoDb.scan(scanParams).promise();

  if (result.count === 0) {
    return Helper.formatJSONResponse("Incorrect Board", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};

module.exports.getBoardItem = async (event) => {
  const id = event.pathParameters.id;
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const scanParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      primary_key: id,
    },
  };
  const result = await dynamoDb.get(scanParams).promise();

  if (!result || Object.keys(result).length === 0) {
    return Helper.formatJSONResponse("no record found board", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};

module.exports.deleteBoardItem = async (event) => {
  const body = JSON.parse(event.body.toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const deleteParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      primary_key: body.id,
    },
    ReturnValues: "ALL_OLD",
  };
  const result = await dynamoDb.delete(deleteParams).promise();

  if (!result || Object.keys(result).length === 0) {
    return Helper.formatJSONResponse("no record delete found board", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};

module.exports.updateBoardItem = async (event) => {
  const body = JSON.parse(event.body.toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  if (!body.id ) {
    return Helper.formatJSONResponse("Missing board ID", 422);
  }
  const key = "columnOrder";
  const columnOrder = body.columnOrder;
  const updateParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      primary_key: body.id,
    },
    UpdateExpression: `set ${key} = :updateValue`,
    ExpressionAttributeValues: {
      ":updateValue": columnOrder,
    },
    ReturnValues: "ALL_NEW",
  };
  const result = await dynamoDb.update(updateParams).promise();

  if (!result || Object.keys(result).length === 0) {
    return Helper.formatJSONResponse("no record update found board", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};



