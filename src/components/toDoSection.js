import React from "react";
import ToDoInput from "./toDoInput";
import ToDoInfoFilterBar from "./toDoInfoFilterBar";
import ToDoList from "./toDoList";
import { ALL, ACTIVE, COMPLETED } from "../constants/filterStatus";
import { toDoItems } from "./mockedData/toDoItems";

class ToDoSection extends React.Component {
  state = {
    items: [],
    filter: ALL,
  };

  constructor() {
    super();
    this.toDoAllItems = toDoItems;
  }

  componentDidMount() {
    this.setState({ items: this.toDoAllItems });
    console.log("DidMount");
  }

  checkActiveItems = (items) => items.isActive;

  checkCompletedItems = (items) => !items.isActive;

  handleAllItems = () => {
    const allItems = this.toDoAllItems.filter((items) => items);
    this.setState({ items: allItems, filter: ALL });
  };

  handleActiveItems = () => {
    const activeItems = this.toDoAllItems.filter((items) => items.isActive);
    this.setState({ items: activeItems, filter: ACTIVE });
  };

  handleCompletedItems = () => {
    const inactiveItems = this.toDoAllItems.filter((items) => !items.isActive);
    this.setState({ items: inactiveItems, filter: COMPLETED });
  };

  handleClearCompletedItems = () => {
    const items = this.toDoAllItems.filter((items) => items.isActive);
    this.setState({ items, filter: ALL });
  };

  render() {
    const { items } = this.state;
    const { length: countItems } = this.state.items;

    const activeItems = items.filter(this.checkActiveItems);
    const completedItems = items.filter(this.checkCompletedItems);

    return (
      <React.Fragment>
        <h1 className="heading">TODOS</h1>
        <div className="to_do_section">
          <ToDoInput />
          {countItems > 0 && <ToDoList items={items} />}
          {countItems > 0 && (
            <ToDoInfoFilterBar
              countActive={activeItems.length}
              countInactive={completedItems.length}
              onAllItems={this.handleAllItems}
              onActiveItems={this.handleActiveItems}
              onCompletedItems={this.handleCompletedItems}
              onClearCompletedItems={this.handleClearCompletedItems}
              filter={this.state.filter}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoSection;
