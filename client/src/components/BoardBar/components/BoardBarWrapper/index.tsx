import React, {FC} from 'react';

//CSS
import styles from '../../BoardBar.module.css'

interface BoardBarWrapperProps extends React.HTMLAttributes<HTMLDivElement>{
    children
}

const BoardBarWrapper: FC<BoardBarWrapperProps> = ({children}) => {
  return <div className={styles.boardBarwrapper}>{children}</div>;
};

export default BoardBarWrapper;