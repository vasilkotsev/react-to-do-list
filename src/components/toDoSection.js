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
    const { length: countItems } = this.state.items;

    function checkActiveItems(items) {
      return items.isActive;
    }

    function checkInactiveItems(items) {
      return !items.isActive;
    }

    const activeItems = items.filter(checkActiveItems);
    const inactiveItems = items.filter(checkInactiveItems);
    console.log(inactiveItems);

    return (
      <React.Fragment>
        <h1 className="heading">todos</h1>
        <div className="to_do_section">
          <ToDoInput />
          {countItems > 0 && <ToDoList items={items} />}
          {countItems > 0 && (
            <ToDoInfoFilterBar
              countActive={activeItems.length}
              countInactive={inactiveItems.length}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoSection;
