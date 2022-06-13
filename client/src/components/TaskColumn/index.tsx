import React, {FC} from "react";
import {ReactElement} from "react";

//CSS
import styles from "./TaskColumn.module.css";

//COMPONENTS
import TaskCard from "../TaskCard";

interface TaskColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  children:
    | ReactElement<typeof TaskCard>
    | Array<ReactElement<typeof TaskCard>>;
  provided: any;
  innerRef: any;
  isDraggingOver: boolean;
}

const TaskColumn: FC<TaskColumnProps> = ({
  children,
  provided,
  innerRef,
  isDraggingOver,
}) => {
  return (
    <div
      {...provided.droppableProps}
      ref={innerRef}
      className={`${styles.taskColumnContainer} ${isDraggingOver && styles.columnDraggingOver}`}>
      {children}
    </div>
  );
};

export default TaskColumn;
