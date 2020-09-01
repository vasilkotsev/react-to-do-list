import React from "react";
import ToDoItem from "./toDoItem";
import PropTypes from "prop-types";

const ToDoList = ({ items }) => {
  console.log(items);
  return (
    <ul className="to_do_list">
      {items.map((item) => (
        <ToDoItem key={item._id} text={item.name} isActive={item.isActive} />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {};

export default ToDoList;
