import React from "react";
import PropTypes from "prop-types";
import { ALL, ACTIVE, COMPLETED } from "../constants/filterStatus";

const ToDoInfoFilterBar = ({
  countActive,
  countInactive,
  onAllItems,
  onActiveItems,
  onCompletedItems,
  onClearCompletedItems,
  filter,
}) => {
  return (
    <div className="to_do_info_filter_bar">
      <span className="to_do_item_count">
        {countActive === 1
          ? `${countActive} item left`
          : `${countActive} items left`}
      </span>
      <ul className="to_do_filters">
        <li>
          <a
            href="#"
            className={filter === ALL ? "selected_items" : undefined}
            onClick={onAllItems}
          >
            All
          </a>
        </li>

        <li>
          <a
            href="#"
            className={filter === ACTIVE ? "selected_items" : undefined}
            onClick={onActiveItems}
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#"
            className={filter === COMPLETED ? "selected_items" : undefined}
            onClick={onCompletedItems}
          >
            Completed
          </a>
        </li>
      </ul>
      {countInactive > 0 ? (
        <button className="to_do_clear_btn" onClick={onClearCompletedItems}>
          Clear Completed
        </button>
      ) : undefined}
    </div>
  );
};

export default ToDoInfoFilterBar;
