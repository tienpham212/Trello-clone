import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

interface BoardColumnContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const BoardColumnContainer: FC<BoardColumnContainerProps> = ({children}) => {
  return <div className={styles.boardColumnContainer}>{children}</div>;
};

export default BoardColumnContainer;
