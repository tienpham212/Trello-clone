import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
}

const ListItem: FC<ListItemProps> = ({children}) => {
  return <div className={styles.boardColumnListItem}>{children}</div>;
};

export default ListItem;
