"use strict";
const AWS = require("aws-sdk");
const {Helper} = require("../util/helper");

module.exports.createCard = async (event) => {
  const body = JSON.parse(event.body.toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  if (!body.content) {
    return Helper.formatJSONResponse("Missing field name ", 422);
  }
  const card = {
    primary_key: body.id,
    content: body.content,
  };
  const putParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: card,
  };

  await dynamoDb.put(putParams).promise();

  return Helper.formatJSONResponse(body, 200);
};

module.exports.getCards = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const scanParams = {
    TableName: process.env.DYNAMODB_TABLE,
  };
  const result = await dynamoDb.scan(scanParams).promise();

  if (result.count === 0) {
    return Helper.formatJSONResponse("Incorrect Card", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};

module.exports.getCardItem = async (event) => {
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
    return Helper.formatJSONResponse("no record found Card", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};

module.exports.deleteCardItem = async (event) => {
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
    return Helper.formatJSONResponse("no record delete found Card", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};

module.exports.updateCardItem = async (event) => {
  const body = JSON.parse(event.body.toString());
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  if (!body.id) {
    return Helper.formatJSONResponse("Missing Card ID", 422);
  }
  const key = "content";
  const content = body.content
  const updateParams = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      primary_key: body.id,
    },
    UpdateExpression: `set ${key} = :updateValue`,
    ExpressionAttributeValues: {
      ":updateValue": content,
    },
    ReturnValues: "ALL_NEW",
  };
  const result = await dynamoDb.update(updateParams).promise();

  if (!result || Object.keys(result).length === 0) {
    return Helper.formatJSONResponse("no record update found Card", 404);
  }

  return Helper.formatJSONResponse(result, 200);
};
