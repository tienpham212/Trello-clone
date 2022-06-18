import React, {FC, useEffect, useState} from "react";

//CSS
import "@atlaskit/css-reset";

//COMPONENTS
import Wrapper from "./components/BoardColumnWrapper";
import BoardSection from "./components/BoardColumnSection";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

//TYPES
import {IColumn} from "../../types/IColumn";
import {IList} from "../../types/IList";
import {mapOrder} from "../../helper/utilites";

//REDUX
import { connect } from "react-redux";
import { ConnectedProps } from "react-redux";

interface BordColumnProps extends ConnectedProps<typeof connector> {

}

const BoardColumn: FC<BordColumnProps> = ({
  board,
}) => {
  // const [board, setBoard] = useState<IList[]>(exmapleData);
  // const [columns, setColumns] = useState<IColumn[]>(exmapleData[0].columns);
  let {columnOrder, cards, columns} = board;

  const onDragStart = (start, provided) => {
    provided.announce(
      `You have lifted te task in position ${start.source.index + 1}`
    );
  };

  const onDragUpdate = (update, provided) => {
    const message = update.destination
      ? `You have moved the task to position ${update.destination.index + 1}`
      : `You are currently not over a droppable area`;

    provided.announce(message);
  };

  const onDragEnd = (res, provided) => {
    //   const message = res.destination
    //     ? `You have moved the task from position
    //     ${res.source.index + 1} to ${res.destination.index + 1}`
    //     : `The task has been returned to its starting position of
    //     ${res.source.index + 1}`;

    //   provided.announce(message);
    // todo: reorder our columns
    // const {destination, source, draggableId, type} = res;

    // if (type === "column") {
    //   const newColumnOrder = Array.from(board[0].columnOrder);
    //   newColumnOrder.splice(source.index, 1);
    //   newColumnOrder.splice(destination.index, 0, draggableId);

    //   const newBoard = Array.from(board);
    //   newBoard[0].columnOrder = newColumnOrder;
    //   setBoard(newBoard);
    // }

    // if (!destination) {
    //   return;
    // }

    // if (
    //   destination.droppableId === source.droppableId &&
    //   destination.index === source.index
    // ) {
    //   return;
    // }

    // const startIndexColumn = columns.findIndex(
    //   (item) => item.id === source.droppableId
    // );

    // const finishIndexColumn = columns.findIndex(
    //   (item) => item.id === destination.droppableId
    // );

    // if (startIndexColumn === -1) {
    //   return;
    // }

    // const start = columns[startIndexColumn];
    // const finish = columns[finishIndexColumn];

    // if (startIndexColumn === finishIndexColumn) {
    //   //Moving within the column
    //   const newCardOrder = Array.from(start.cardOrder);
    //   newCardOrder.splice(source.index, 1);
    //   newCardOrder.splice(destination.index, 0, draggableId);

    //   const newColumn = {
    //     ...start,
    //     cardOrder: newCardOrder,
    //   };

    //   const newColumns = [...columns];
    //   newColumns[startIndexColumn] = newColumn;

    //   setColumns(newColumns);
    // } else {
    //   //Moving form one list to another
    //   const newStartColumnOrder = Array.from(start.cardOrder);

    //   const startCardId = newStartColumnOrder.splice(source.index, 1);

    //   const startCardIndex = start.cards.findIndex(
    //     (item) => item.id === startCardId[0]
    //   );
    //   const newStartColumnCards = Array.from(start.cards);
    //   const draggedCardFromStart = newStartColumnCards.splice(
    //     startCardIndex,
    //     1
    //   );

    //   const newStartColumn = {
    //     ...start,
    //     cardOrder: newStartColumnOrder,
    //     cards: newStartColumnCards,
    //   };

    //   const newFinishColumnOrder = Array.from(finish.cardOrder);
    //   newFinishColumnOrder.splice(destination.index, 0, draggableId);
    //   const newFinishColumnCard = Array.from(finish.cards);
    //   newFinishColumnCard.splice(destination.index, 0, draggedCardFromStart[0]);

    //   const newFinishColumn = {
    //     ...finish,
    //     cardOrder: newFinishColumnOrder,
    //     cards: newFinishColumnCard,
    //   };

    //   const newColumns = [...columns];
    //   newColumns[startIndexColumn] = newStartColumn;
    //   newColumns[finishIndexColumn] = newFinishColumn;

    //   setColumns(newColumns);
    // }
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}>
      <Droppable
        droppableId="all-columns12"
        direction="horizontal"
        type="column">
        {(provided) => (
          <Wrapper provided={provided} innerRef={provided.innerRef}>
            {columnOrder.map((columnId: string, index: number) => {
              return (
                <Draggable draggableId={columnId} index={index} key={columnId}>
                  {(provided) => (
                    <BoardSection
                      provided={provided}
                      innerRef={provided.innerRef}
                      taskColumn={columns[columnId]}
                      cards= {cards}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapState = (state) =>({
  board: state.board
})

const connector = connect(mapState)

export default connector(BoardColumn);
