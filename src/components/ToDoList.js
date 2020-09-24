import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

const ToDoList = ({ items }) => {
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
