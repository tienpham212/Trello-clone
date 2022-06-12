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
}

const TaskColumn: FC<TaskColumnProps> = ({children}) => {
  return <div className={styles.taskColumnContainer}>{children}</div>;
};

export default TaskColumn;
