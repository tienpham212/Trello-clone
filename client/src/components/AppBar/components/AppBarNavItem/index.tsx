import React, {FC} from "react";

//CSS
import styles from "../../AppBar.module.css";

interface AppBarNavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const AppBarNavItem: FC<AppBarNavItemProps> = ({children}) => {
  return <div className={styles.appBarNavItem}>{children}</div>;
};

export default AppBarNavItem;
