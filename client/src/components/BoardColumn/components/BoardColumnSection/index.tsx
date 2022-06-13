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
import { ICard } from "../../../../types/ICard";
import {Droppable, Draggable} from "react-beautiful-dnd";

interface BoardColumnSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  taskColumn: IColumn,
}

const BoardColumnSection: FC<BoardColumnSectionProps> = ({
  taskColumn,
}) => {

  const cards = mapOrder(taskColumn.cards , taskColumn.cardOrder, "id");


  return (
    <>
      {
        <div className={styles.boardColumnSection}>
          <Container>
            <Header>{taskColumn.title}</Header>
            <Droppable
              droppableId={taskColumn.id}>
              {(provided, snapshot) => (
                <TaskColumn
                  isDraggingOver={false}
                  provided={provided}
                  innerRef={provided.innerRef}>
                  {cards.map((card: ICard, index: number) => {
                    return (
                      <Draggable
                        key={card.id}
                        draggableId={card.id}
                        index={index}>
                        {(provided, snapshot) => (
                          <>
                            {/* I use react class componen here because rfc do not accept ref */}
                            <TaskCard
                              provided={provided}
                              innerRef={provided.innerRef}
                              title={card.title}
                              snapshot={snapshot}
                            />
                          </>
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
};

export default BoardColumnSection;
