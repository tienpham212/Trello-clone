import React, {FC} from "react";

//CSS
import styles from "../../BoardBar.module.css";

interface BoardBarContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const BoardBarContainer: FC<BoardBarContainerProps> = ({children}) => {
  return <div className={styles.boardBarContainer}>{children}</div>;
};

export default BoardBarContainer;
