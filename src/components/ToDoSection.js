import React from "react";
import ToDoInput from "./ToDoInput";
import ToDoInfoFilterBar from "./ToDoInfoFilterBar";
import ToDoList from "./ToDoList";
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

  checkActiveItems = (item) => item.isActive;

  checkCompletedItems = (item) => !item.isActive;

  handleAllItems = () => {
    const allItems = this.toDoAllItems.filter((items) => items);
    this.setState({ items: allItems, filter: ALL });
  };

  handleActiveItems = () => {
    const activeItems = this.toDoAllItems.filter((items) => items.isActive);
    this.setState({ items: activeItems, filter: ACTIVE });
  };

  handleCompletedItems = () => {
    const completedItems = this.toDoAllItems.filter((items) => !items.isActive);
    this.setState({ items: completedItems, filter: COMPLETED });
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
          <ToDoInfoFilterBar
            countActive={activeItems.length}
            countCompleted={completedItems.length}
            onAllItemsClick={this.handleAllItems}
            onActiveItemsClick={this.handleActiveItems}
            onCompletedItemsClick={this.handleCompletedItems}
            onClearCompletedItemsClick={this.handleClearCompletedItems}
            filter={this.state.filter}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ToDoSection;
