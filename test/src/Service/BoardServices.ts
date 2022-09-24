import { IBoardItem } from "src/Types/DatabaseTypes";
import { databaseService } from "./DatabaseService";

export class BoardServices {
  /**
   * description: Add new column to boad
   * @param {string} columnId required
   * @param {array} cardOrder order of cards in columns
   * @param {string} title column title
   * @return {object} added item
   */
  public static async addColumn(
    columnId: string,
    cardOrder: string[],
    title: string
  ): Promise<IBoardItem> {
    const column: IBoardItem = {
      primary_key: columnId,
      cardOrder: cardOrder,
      title: title,
    };
    const AddedColumn = await databaseService.addColumn(column);

    if (!AddedColumn) throw new Error("Board service false to add item");

    return AddedColumn;
  }

  /**
   * description: get board columns
   * @return {object} list of columns
   */
  public static async getAllColumns(): Promise<any> {
    const results = await databaseService.getAllColumns();
    if (!results) throw new Error("Board service false to get columns");
    return results;
  }

  /**
   * description: get column by id
   * @return {object} column by id
   */
  public static async getColumn(columnId: string): Promise<any> {
    const data = await databaseService.getColumn(columnId);
    if (!data) throw new Error("Board service false to get column");
    return data;
  }

  /**
   * description: delete column by id
   * @return {object} deleted item
   */
  public static async deleteColumn(columnId: string): Promise<any> {
    const data = await databaseService.deleteColumn(columnId);
    if (!data) throw new Error("Board service false to get column");
    return data;
  }
}





