import React from "react";
import Pluralization from "./Pluralization";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ALL, ACTIVE, COMPLETED } from "../constants/filterStatus";

const ToDoInfoFilterBar = ({
  countCompleted,
  countActive,
  onAllItemsClick,
  onActiveItemsClick,
  onCompletedItemsClick,
  onClearCompletedItemsClick,
  filter,
}) => {
  return (
    <div className="to_do_info_filter_bar">
      {filter === COMPLETED ? (
        <Pluralization
          one={`${countCompleted} item completed`}
          zero={"No items"}
          multiple={`${countCompleted} items completed`}
          count={countCompleted}
        />
      ) : (
        <Pluralization
          one={`${countActive} item left`}
          zero={"No items"}
          multiple={`${countActive} items left`}
          count={countActive}
        />
      )}

      <div className="to_do_filters">
        <button
          className={filter === ALL ? "selected_items" : undefined}
          onClick={onAllItemsClick}
        >
          All
        </button>

        <button
          className={filter === ACTIVE ? "selected_items" : undefined}
          onClick={onActiveItemsClick}
        >
          Active
        </button>

        <button
          className={filter === COMPLETED ? "selected_items" : undefined}
          onClick={onCompletedItemsClick}
        >
          Completed
        </button>
      </div>
      {countCompleted > 0 ? (
        <button
          className="to_do_clear_btn"
          onClick={onClearCompletedItemsClick}
        >
          Clear Completed
        </button>
      ) : undefined}
    </div>
  );
};

export default ToDoInfoFilterBar;
