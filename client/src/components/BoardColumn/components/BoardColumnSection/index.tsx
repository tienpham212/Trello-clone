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
            <TaskColumn>
              {cards.map((card: ICard, index: number) => {
                return <TaskCard key={`card-${index}`}>{card.title}</TaskCard>;
              })}
            </TaskColumn>
            <Footer>End of column 1</Footer>
          </Container>
        </div>
      }
    </>
  );
};

export default BoardColumnSection;
