import React, {FC} from "react";

//CSS
import styles from "./TaskCard.module.css";

interface TaskCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const TaskCard: FC<TaskCardProps> = ({children}) => {
  return <div className={styles.taskCardContainer}>{children}</div>;
};

export default TaskCard;
