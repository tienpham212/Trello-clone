import React from "react";
//CSS
import styles from "./TaskCard.module.css";


class TaskCard extends React.Component<{provided: any; innerRef: any, snapshot:any, title: string}> {
  render() {
    const {provided, innerRef, snapshot} = this.props;

    return (
      <div
        className={`${styles.taskCardContainer} ${
          snapshot.isDragging ? styles.cardDragging : ""
        }`}
        {...provided.draggableProps}
        //DraghandleProps will control which one can be dragged
        {...provided.dragHandleProps}
        ref={innerRef}>
        {this.props.title}
      </div>
    );
  }
}

export default TaskCard
