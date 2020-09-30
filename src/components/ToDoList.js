import React from "react";
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

const ToDoList = ({ items, onDelete }) => {
  return (
    <ul className="to_do_list">
      {items.map((item) => (
        <ToDoItem
          onDelete={onDelete}
          key={item._id}
          item={item}
          text={item.name}
          isActive={item.isActive}
        />
      ))}
    </ul>
  );
};

ToDoList.propTypes = {};

export default ToDoList;
