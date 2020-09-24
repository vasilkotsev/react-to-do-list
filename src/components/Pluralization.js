import React from "react";
import PropTypes from "prop-types";

const Pluralization = ({ one, zero, multiple, count }) => {
  if (count === 0) return <span className="to_do_item_count">{zero}</span>;
  return <span className="to_do_item_count">{count > 1 ? multiple : one}</span>;
};

export default Pluralization;
