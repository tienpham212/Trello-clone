import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

interface BoardColumnFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const BoardColumnFooter: FC<BoardColumnFooterProps> = ({children}) => {
  return <div className={styles.boardColumnFooter}>{children}</div>;
};

export default BoardColumnFooter;
