import React from "react";
import PropTypes from "prop-types";

const ToDoInfoFilterBar = ({ count }) => {
  return (
    <div className="to_do_info_filter_bar">
      <span className="to_do_item_count">
        {count === 1 ? `${count} item left` : `${count} items left`}
      </span>
      <ul className="to_do_filters">
        <li>
          <a href="#/" className="">
            All
          </a>
        </li>

        <li>
          <a href="#/active" className="">
            Active
          </a>
        </li>

        <li>
          <a href="#/completed" className="">
            Completed
          </a>
        </li>
      </ul>
      <button className="to_do_clear_btn">Clear Completed</button>
    </div>
  );
};

export default ToDoInfoFilterBar;
