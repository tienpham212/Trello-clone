import React, {FC} from "react";
import { ReactElement } from "react";

//CSS
import styles from "../../AppBar.module.css";
import AppBarNavItem from "../AppBarNavItem";

interface AppBarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  children:
    | ReactElement<typeof AppBarNavItem>
    | Array<ReactElement<typeof AppBarNavItem>>;
}

const AppBarNav: FC<AppBarNavProps> = ({children}) => {
  return <div className={styles.appBarNav}>{children}</div>;
};

export default AppBarNav;
