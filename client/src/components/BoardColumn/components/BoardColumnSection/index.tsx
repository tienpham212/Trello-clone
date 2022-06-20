import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

//COMPONENTS
import Container from "../BoardColumnContainer";
import Footer from "../BoardColumnFooter";
import Header from "../BoardColumnHeader";
import TaskCard from "../../../TaskCard";
import TaskColumn from "../../../TaskColumn";
import { IColumn } from "../../../../types/IColumn";
import { mapOrder } from "../../../../helper/utilites";
import { ICard, ICards } from "../../../../types/ICard";
import {Droppable, Draggable} from "react-beautiful-dnd";

interface BoardColumnSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  taskColumn: IColumn;
  cards: ICards;
  provided: any;
  innerRef: any;
}


class BoardColumnSection extends React.Component<BoardColumnSectionProps> {

  render() {
    const {taskColumn, provided, innerRef, cards} = this.props;
    let {cardOrder, id, title} = taskColumn;

    return (
      <>
        {
          <div
            className={styles.boardColumnSection}
            {...provided.draggableProps}
            ref={innerRef}>
            <Container>
              <div
                {...provided.dragHandleProps}
                className={styles.boardColumnHeader}>
                {title}
              </div>
              <Droppable droppableId={id} type="task">
                {(provided, snapshot) => (
                  <TaskColumn
                    isDraggingOver={false}
                    provided={provided}
                    innerRef={provided.innerRef}>
                    {cardOrder.map((cardId: string, index: number) => {
                      return (
                        <Draggable
                          key={cardId}
                          draggableId={cardId}
                          index={index}>
                          {(provided, snapshot) => (
                            <TaskCard
                              provided={provided}
                              innerRef={provided.innerRef}
                              snapshot={snapshot}
                              aira-roledescription="Press space bar to left the task"
                              card = {cards[cardId]}
                            />
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </TaskColumn>
                )}
              </Droppable>
              <Footer>End of column 1</Footer>
            </Container>
          </div>
        }
      </>
    );
  }
}

export default BoardColumnSection;

