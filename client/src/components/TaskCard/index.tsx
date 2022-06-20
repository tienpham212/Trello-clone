import React from "react";
import { ICard } from "../../types/ICard";
//CSS
import styles from "./TaskCard.module.css";

interface TaskCardProps extends React.HTMLAttributes<HTMLDivElement> {
  provided: any;
  innerRef: any;
  snapshot: any;
  card: ICard;
}

class TaskCard extends React.Component<TaskCardProps> {
  render() {
    const {provided, innerRef, snapshot, card} = this.props;
    return (
      <div
        className={`${styles.taskCardContainer} ${
          snapshot.isDragging ? styles.cardDragging : ""
        }`}
        {...provided.draggableProps}
        //DraghandleProps will control which one can be dragged
        {...provided.dragHandleProps}
        ref={innerRef}>
        {card.content}
      </div>
    );
  }
}

export default TaskCard
