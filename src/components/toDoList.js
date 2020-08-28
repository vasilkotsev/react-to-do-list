import React from "react";
import ToDoItem from "./toDoItem";
import PropTypes from "prop-types";

const ToDoList = (props) => {
  return (
    <ul className="to_do_list">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </ul>
  );
};

ToDoList.propTypes = {};

export default ToDoList;
