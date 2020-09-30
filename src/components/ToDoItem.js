import React from "react";
import PropTypes from "prop-types";

const ToDoItem = ({ text, isActive, onDelete, item }) => {
  return (
    <li className="to_do_item">
      <input type="checkbox" id={text} checked={!isActive} />
      <label htmlFor={text} />
      <h2
        className={isActive ? "to_do_item_title" : "to_do_item_title item_done"}
      >
        {text}
      </h2>
      <button
        className="to_do_item_btn_delete"
        onClick={() => onDelete(item)}
      />
    </li>
  );
};

ToDoItem.propTypes = {};

export default ToDoItem;
