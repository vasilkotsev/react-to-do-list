import React from "react";
import PropTypes from "prop-types";

const ToDoInfoFilterBar = ({ countActive, countInactive }) => {
  return (
    <div className="to_do_info_filter_bar">
      <span className="to_do_item_count">
        {countActive === 1
          ? `${countActive} item left`
          : `${countActive} items left`}
      </span>
      <ul className="to_do_filters">
        <li>
          <a href="#/" className="selected_items">
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
      {countInactive > 0 ? (
        <button className="to_do_clear_btn">Clear Completed</button>
      ) : undefined}
    </div>
  );
};

export default ToDoInfoFilterBar;
