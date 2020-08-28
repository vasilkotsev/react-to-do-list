import React from "react";
import ToDoInput from "./toDoInput";
import ToDoInfoFilterBar from "./toDoInfoFilterBar";
import ToDoList from "./toDoList";
import { toDoItems } from "../constants/toDoItems";

class ToDoSection extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: toDoItems });
  }

  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <h1 className="heading">todos</h1>
        <div className="to_do_section">
          <ToDoInput />
          {items.length > 0 && <ToDoList />}
          {items.length > 0 && <ToDoInfoFilterBar count={items.length} />}
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoSection;
