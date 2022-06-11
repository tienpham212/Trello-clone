import React, {FC, ReactElement} from "react";

//CSS
import styles from "../../BoardBar.module.css";
import BoardBarNavItem from "../BoardBarNavItem";


interface BoardBarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children:
    ReactElement<typeof BoardBarNavItem>
  | Array<ReactElement<typeof BoardBarNavItem>>;
}

const BoardBarNav:FC<BoardBarNavProps> = ({children}) => {
  return <div className={styles.boardBarNav}>{children}</div>;
};

export default BoardBarNav;
