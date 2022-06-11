import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

//COMPONENTS
import Container from "../BoardColumnContainer";
import Footer from "../BoardColumnFooter";
import Header from "../BoardColumnHeader";
import List from "../BoardColumnList";
import ListItem from "../BoardColumnListItem";

interface BoardColumnSectionProps extends React.HTMLAttributes<HTMLDivElement> {

}

const BoardColumnSection: FC<BoardColumnSectionProps> = ({children}) => {
  return (
    <div className={styles.boardColumnSection}>
      <Container>
        <Header>Column 1</Header>
        <List>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
        </List>
        <Footer>End of column 1</Footer>
      </Container>
    </div>
  );
};

export default BoardColumnSection;
