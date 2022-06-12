import React, {FC} from "react";
import { ReactElement } from "react";
import BoardColumnListItem from "../BoardColumnListItem";

//CSS
import styles from "../../BoardColumn.module.css";

interface BoardColumnListProps extends React.HTMLAttributes<HTMLDivElement> {
  children:
    | ReactElement<typeof BoardColumnListItem>
    | Array<ReactElement<typeof BoardColumnListItem>>;
}

const BoardColumnList: FC<BoardColumnListProps> = ({children}) => {
  return (
    <div className={styles.boardColumnList}>
        {children}
    </div>);
};

export default BoardColumnList;
