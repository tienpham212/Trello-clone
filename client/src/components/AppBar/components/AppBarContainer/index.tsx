import React, {FC} from "react";

//CSS
import styles from "../../AppBar.module.css";

interface AppBarContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const AppBarContainer: FC<AppBarContainerProps> = ({children}) => {
  return <div className={styles.appBarContainer}>{children}</div>;
};

export default AppBarContainer;
