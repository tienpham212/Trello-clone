import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

interface BoardColumnWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const BoardColumnWrapper: FC<BoardColumnWrapperProps> = ({children}) => {
  return <div className={styles.boardColumnWrapper}>{children}</div>;
};

export default BoardColumnWrapper;
