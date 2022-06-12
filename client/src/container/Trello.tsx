import React, {FC} from 'react';

//CSS
import styles from "./Trello.module.css"

//COMPONENT
import AppBar from '../components/AppBar';
import BoardBar from '../components/BoardBar';
import BoardColumn from '../components/BoardColumn';


const Trello:FC = () => {
    return (
      <div className={styles.container}>
        <AppBar />
        <BoardBar />
        <BoardColumn />
      </div>
    );
}

export default Trello;