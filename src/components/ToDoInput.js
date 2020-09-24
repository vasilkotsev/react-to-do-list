import React from "react";

class ToDoInput extends React.Component {
  render() {
    return (
      <input
        placeholder="What needs to be done?"
        type="text"
        className="to_do_input"
        id="todo_input"
        name="todo_input"
      />
    );
  }
}

export default ToDoInput;
