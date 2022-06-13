import React, {FC, useEffect, useState} from "react";
import {exmapleData} from '../../helper/initialData'

//CSS
import "@atlaskit/css-reset";

//COMPONENTS
import Wrapper from "./components/BoardColumnWrapper";
import BoardSection from "./components/BoardColumnSection";
import {DragDropContext} from "react-beautiful-dnd"

//TYPES
import { IColumn } from "../../types/IColumn";
import { IList } from "../../types/IList";
import { mapOrder } from "../../helper/utilites";

const BoardColumn: FC = () => {

  const [board, setBoard] = useState<IList[]>(exmapleData);
  const [columns, setColumns] = useState<IColumn[]>(exmapleData[0].columns);
 

  useEffect(() => {
   
  }, [board, columns])


    const onDragStart = () => {
      // document.body.style.color = 'orange';
      // document.body.style.transition = "all .5s"
    };

    const onDragUpdate = (update) => {
      //  const {destination} = update;
       
      //  const opacity = destination
      //    ? destination.index / columns.length
      //    : 0;
      //  document.body.style.color = `rgba( 153, 141, 217, ${opacity})`;

    };

    const onDragEnd = (res) => {
        //todo: reorder our columns
         document.body.style.color = "inherit";
         document.body.style.transition = "inherit";
        const { destination, source, draggableId } = res;

        if(!destination) {
          return;
        }

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
        
        const startIndexColumn = columns.findIndex(
          (item) => item.id === source.droppableId
        );

        const finishIndexColumn = columns.findIndex(
          (item) => item.id === destination.droppableId
        );

        if (startIndexColumn === -1) {
          return;
        }

        const start = columns[startIndexColumn];
        const finish = columns[finishIndexColumn];
        console.log(start, finish);
        

        if (startIndexColumn === finishIndexColumn) {

          //Moving within the column
          const newCardOrder = Array.from(start.cardOrder);
          newCardOrder.splice(source.index, 1);
          newCardOrder.splice(destination.index, 0, draggableId);

          const newColumn = {
            ...start,
            cardOrder: newCardOrder,
          };

          const newColumns = [...columns];
          newColumns[startIndexColumn] = newColumn;

          setColumns(newColumns);
        } else {
          //Moving form one list to another
          const newStartColumnOrder = Array.from(start.cardOrder);

          const startCardId = newStartColumnOrder.splice(source.index, 1);
 
          const startCardIndex = start.cards.findIndex((item) => item.id === startCardId[0]);
          const newStartColumnCards = Array.from(start.cards);
          const draggedCardFromStart = newStartColumnCards.splice(startCardIndex, 1);
      
          const newStartColumn = {
            ...start,
            cardOrder: newStartColumnOrder,
            cards: newStartColumnCards,
          };

          const newFinishColumnOrder = Array.from(finish.cardOrder);
          newFinishColumnOrder.splice(destination.index, 0, draggableId);
          const newFinishColumnCard = Array.from(finish.cards);
          newFinishColumnCard.splice(destination.index, 0, draggedCardFromStart[0]);

          const newFinishColumn = {
            ...finish,
            cardOrder: newFinishColumnOrder,
            cards: newFinishColumnCard,
          };

          const newColumns = [...columns];
          newColumns[startIndexColumn] = newStartColumn;
          newColumns[finishIndexColumn] = newFinishColumn;

          setColumns(newColumns);
        }
    }

    return (
      <Wrapper>
        <DragDropContext
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}>
          {board.length > 0
            ? mapOrder(columns, board[0]?.columnOrder, "id").map(
                (column: IColumn, index: number) => {
                  return (
                    <BoardSection key={`column-${index}`} taskColumn={column} />
                  );
                }
              )
            : "Board Not Found"}
        </DragDropContext>
      </Wrapper>
    );
};

export default BoardColumn;
