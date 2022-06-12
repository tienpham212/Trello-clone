import React, {FC} from "react";

//CSS
import styles from "./BoardColumn.module.css";

//COMPONENTS
import Wrapper from "./components/BoardColumnWrapper";
import BoardSection from "./components/BoardColumnSection";

const BoardColumn: FC = () => {
  return (
    <Wrapper>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
        <BoardSection/>
    </Wrapper>
  );
};

export default BoardColumn;
