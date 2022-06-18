import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";

interface BoardColumnWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children;
  provided: any;
  innerRef: any;
}

class BoardColumnWrapper extends React.Component<BoardColumnWrapperProps> {
  render() {

    const {provided , innerRef} = this.props;

    return (
      <div
        {...provided.droppableProps}
        ref={innerRef}
        className={styles.boardColumnWrapper}>
        {this.props.children}
      </div>
    );
  }
}

export default BoardColumnWrapper;
