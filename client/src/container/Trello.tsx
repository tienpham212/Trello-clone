import React, {FC} from 'react';

//CSS
import styles from "./Trello.module.css"

//COMPONENT
import AppBar from '../components/AppBar';
import BoardBar from '../components/BoardBar';
import BoardColumn from '../components/BoardColumn';
import Counter from '../redux/features/Counter';


const Trello:FC = () => {
    return (
      <div className={styles.container}>
        <AppBar />
        <BoardBar />
        <BoardColumn />
        <Counter/>
      </div>
    );
}

export default Trello;