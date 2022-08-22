import React, {FC} from "react";

//CSS
import styles from "../../BoardColumn.module.css";
import "antd/dist/antd.css";
import {FaRegCheckCircle, FaRegWindowClose, FaTrashAlt} from "react-icons/fa";

//COMPONENTS
import Container from "../BoardColumnContainer";
import {Droppable, Draggable} from "react-beautiful-dnd";
import Footer from "../BoardColumnFooter";
import { IColumn } from "../../../../types/IColumn";
import {ICards } from "../../../../types/ICard";
import Input from "../../../Input";
import {Popconfirm} from "antd";
import TaskCard from "../../../TaskCard";
import TaskColumn from "../../../TaskColumn";

//REDUX
import {connect, ConnectedProps} from "react-redux";
import {editColumnTitle, deleteColumn} from "../../../../redux/features/boardSlice";
import {RootState} from "../../../../redux/store";
import MenuIcon from "../../../MenuIcon";



interface BoardColumnSectionProps extends React.HTMLAttributes<HTMLDivElement> , ConnectedProps<typeof connector> {
  taskColumn: IColumn;
  cards: ICards;
  provided: any;
  innerRef: any;
}
class BoardColumnSection extends React.Component<BoardColumnSectionProps> {
  state: {isTitleClick: boolean; columnTitle: string; isMenuOpen: boolean;} = {
    isTitleClick: false,
    columnTitle: "",
    isMenuOpen: false,
  };

  constructor(props) {
    super(props);
    this.escFunction = this.escFunction.bind(this);
  }

  escFunction(event) {
    if (event.key === "Escape") {
      this.setState({
        ...this.state,
        isTitleClick: false,
        columnTitle: this.props.taskColumn?.title,
      });
      
    }
  }

  componentDidMount() {
    this.setState({...this.state, columnTitle: this.props.taskColumn.title});
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    const {taskColumn, provided, innerRef, cards, editColumnTitle, deleteColumn} = this.props;
    let {cardOrder, id, title} = taskColumn;

    const handleInput = (e) => {
      const value = e.target.value;
      this.setState({...this.state, columnTitle: value});
    };

    const hanldeTitleChange = () => {
      this.setState({isTitleClick: false});
      editColumnTitle({
        columnId: id,
        editTitle: this.state.columnTitle,
      });
    };

    const handleTitleChangeOnKeyDown = (e) => {
      if (e.key === "Enter") {
        hanldeTitleChange();
      } 
    };

    const handleDeleteColumn = () => {
      deleteColumn({columnId: id});
    }

    return (
      <>
        {
          <div
            className={styles.boardColumnSection}
            {...provided.draggableProps}
            ref={innerRef}>
            <Container>
              <div
                {...provided.dragHandleProps}
                className={styles.boardColumnHeader}
                onClick={() => {
                  if (!this.state.isTitleClick) {
                    this.setState({isTitleClick: true});
                  }
                }}>
                {this.state.isTitleClick ? (
                  <div className={styles.inputGroup}>
                    <Input
                      value={this.state.columnTitle}
                      onChange={handleInput}
                      onKeyDown={handleTitleChangeOnKeyDown}
                    />
                    <FaRegCheckCircle
                      className={styles.iconCheck}
                      onClick={hanldeTitleChange}
                    />
                  </div>
                ) : (
                  <div className={styles.inputGroup}>{title}</div>
                )}
              </div>
              {!this.state.isTitleClick && (
                <MenuIcon
                  handleClick={() => {
                    this.setState({
                      ...this.state,
                      isMenuOpen: !this.state.isMenuOpen,
                    });
                  }}
                  isMenuOpen={this.state.isMenuOpen}
                  cssClass={styles.iconClose}
                  title="List Actions"
                  content={
                    <div>
                      <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={handleDeleteColumn}
                        okText="Yes"
                        cancelText="No"
                        placement="right"
                        >
                        <p>Delete Column...</p>
                      </Popconfirm>
                      <p>Add Card...</p>
                    </div>
                  }
                />
              )}
              <Droppable droppableId={id} type="task">
                {(provided, snapshot) => (
                  <TaskColumn
                    isDraggingOver={false}
                    provided={provided}
                    innerRef={provided.innerRef}>
                    {cardOrder.map((cardId: string, index: number) => {
                      return (
                        <Draggable
                          key={cardId}
                          draggableId={cardId}
                          index={index}>
                          {(provided, snapshot) => (
                            <TaskCard
                              provided={provided}
                              innerRef={provided.innerRef}
                              snapshot={snapshot}
                              aira-roledescription="Press space bar to left the task"
                              card={cards[cardId]}
                            />
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </TaskColumn>
                )}
              </Droppable>
              <Footer>End of column 1</Footer>
            </Container>
          </div>
        }
      </>
    );
  }
}

const mapState = (state: RootState) => ({})

const mapDispatch = {
  editColumnTitle,
  deleteColumn,
};

const connector = connect(mapState, mapDispatch);

export default connector(BoardColumnSection);

