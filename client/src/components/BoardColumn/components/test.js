import React from "react";
import ReactDOM from "react-dom";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

class List extends React.Component {
  render() {
    const {provided, innerRef, children} = this.props;
    return (
      <div {...provided.droppableProps} ref={innerRef}>
        {children}
      </div>
    );
  }
}

class Person extends React.Component {
  render() {
    const {provided, innerRef} = this.props;
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}>
        'I am a person, I think..'
      </div>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <DragDropContext onDragEnd={() => {}}>
        <h3>My person</h3>
        <Droppable droppableId="droppable">
          {(provided) => (
            <List provided={provided} innerRef={provided.innerRef}>
              <Draggable draggableId="person" index={0}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                    'I am a person, I think..'
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Test;
