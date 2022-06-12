import React, {FC, useEffect, useState} from "react";
import {exmapleData} from '../../helper/initialData'

//CSS
import styles from "./BoardColumn.module.css";

//COMPONENTS
import Wrapper from "./components/BoardColumnWrapper";
import BoardSection from "./components/BoardColumnSection";

//TYPES
import { IColumn } from "../../types/IColumn";
import { IList } from "../../types/IList";
import { mapOrder } from "../../helper/utilites";

const BoardColumn: FC = () => {

  const [board, setBoard] = useState<IList[]>(exmapleData);
  const [columns, setColumns] = useState<IColumn[]>(exmapleData[0].columns);
 

  useEffect(() => {
   
  }, [board, columns])

    return (
      <Wrapper>
        {board.length > 0
          ? mapOrder(columns, board[0]?.columnOrder, "id").map(
              (column: IColumn, index: number) => {
                return (
                  <BoardSection key={`column-${index}`} taskColumn={column} />
                );
              }
            )
          : "Board Not Found"}
      </Wrapper>
    );
};

export default BoardColumn;
