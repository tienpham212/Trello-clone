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
import {setColumnOrder, setCardOrder} from "../../redux/features/boardSlice";
import { RootState } from "../../redux/store";
import AddNewColumnContainer from "./components/AddNewColumnContainer";

interface BordColumnProps extends ConnectedProps<typeof connector> {

}

const BoardColumn: FC<BordColumnProps> = ({
  board,
  setColumnOrder,
  setCardOrder,
}) => {
  let {columnOrder, cards, columns} = board;

  const onDragStart = (start, provided) => {
  };

  const onDragUpdate = (update, provided) => {

  };

  const changeColumnOrder = (
    columnOrder: string[],
    source: any,
    destination: any,
    draggableId: string
  ) => {
    const newColumnOrder = Array.from(columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);
    setColumnOrder(newColumnOrder);
  };

  const isDraggValid = (destination: any, source: any) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return false;
    }
    return true;
  };

  const onDragEnd = (res, provided) => {
    // todo: reorder our columns
    const {destination, source, draggableId, type} = res;

    if (!isDraggValid(destination, source)) {
      return;
    }

    //Change column order
    if (type === "column") {
      changeColumnOrder(board.columnOrder, source, destination, draggableId);
    }

    const destinationId = destination.droppableId;
    const sourceId = source.droppableId;

    if (destinationId === sourceId) {
      //Moving within the column
      if (columns[destinationId]) {
        const newCardOrder: string[] = [...columns[destinationId].cardOrder] ;
        newCardOrder.splice(source.index, 1);
        newCardOrder.splice(destination.index, 0, draggableId);
        setCardOrder([{columnId: destinationId, cardOrder: newCardOrder}]);
      }
        
    } else {
      // Moving form one list to another
      const newStartColumnOrder: string[] = Array.from(columns[sourceId].cardOrder);
      newStartColumnOrder.splice(source.index , 1);
    
      const newFinishCardOrder: string[] = Array.from(
        columns[destinationId].cardOrder
      );
      newFinishCardOrder.splice(destination.index, 0, draggableId);
      
      setCardOrder([
        {columnId: sourceId, cardOrder: newStartColumnOrder},
        {columnId: destinationId, cardOrder: newFinishCardOrder},
      ]);
    }
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
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
                      cards={cards}
                    />
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
            <AddNewColumnContainer/>
          </Wrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const mapState = (state: RootState) => ({
  board: state.board,
});

const mapDispatch = {
  setColumnOrder,
  setCardOrder,
};

const connector = connect(mapState , mapDispatch)

export default connector(BoardColumn);
