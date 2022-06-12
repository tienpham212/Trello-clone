import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

interface BoardColumnHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const BoardColumnHeader: FC<BoardColumnHeaderProps> = ({children}) => {
  return <div className={styles.boardColumnHeader}>{children}</div>;
};

export default BoardColumnHeader;
