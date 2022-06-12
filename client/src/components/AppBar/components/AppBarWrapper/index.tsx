import React, {FC} from "react";

//CSS
import styles from "../../AppBar.module.css";

interface AppBarWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const AppBarWrapper: FC<AppBarWrapperProps> = ({children}) => {
  return <div className={styles.appBarWrapper}>{children}</div>;
};

export default AppBarWrapper;
