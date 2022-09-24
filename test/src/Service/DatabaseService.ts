import { IBoardItem } from "src/Types/DatabaseTypes";

const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

class DatabaseService {
  public readonly dynamoDb: any;
  public readonly boardTableName: string;

  constructor() {
    this.dynamoDb = dynamoDb;
    this.boardTableName = process.env.DYNAMODB_TABLE;
  }
  /**
   * description: Add new column to boad database
   * @param {Object} column required
   * @return {Object} added item
   */
  public async addColumn(column: IBoardItem): Promise<IBoardItem> {
    const putParams = {
      TableName: this.boardTableName,
      Item: column,
      ReturnValues: "ALL_OLD",
    };
    const item = await this.dynamoDb.put(putParams).promise();
    if (!item) {
      throw new Error("add Column fail");
    }
    return item;
  }

  public async getAllColumns(): Promise<any> {
    const scanParams = {
      TableName: this.boardTableName,
    };
    const results = await this.dynamoDb.scan(scanParams).promise();

    if (results.Count === 0) {
      throw new Error(`${this.boardTableName} no record found`);
    }
    return results;
  }

  public async getColumn(id: string): Promise<any> {
    const scanParams = {
      TableName: this.boardTableName,
      Key: {
        primary_key: id,
      },
    };
    const data = await this.dynamoDb.get(scanParams).promise();
    if (!data || Object.keys(data).length === 0) {
      throw new Error(`${id} no record found`);
    }
    return data;
  }

  public async deleteColumn(id: string): Promise<any> {
    const scanParams = {
      TableName: this.boardTableName,
      Key: {
        primary_key: id,
      },
      ReturnValues: "ALL_OLD",
    };
    const data = await this.dynamoDb.delete(scanParams).promise();
    if (!data || Object.keys(data).length === 0) {
      throw new Error(`${id} no record found`);
    }
    return data;
  }
}

export const databaseService = new DatabaseService();
