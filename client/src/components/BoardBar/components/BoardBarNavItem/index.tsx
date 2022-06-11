import React, {FC} from "react";

//CSS
import styles from "../../BoardBar.module.css"

interface BoardBarNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const BoardBarNavItem: FC<BoardBarNavItemProps> = ({children}) => {
  return <div className={styles.boardBarNavItem}>{children}</div>;
};

export default BoardBarNavItem;
