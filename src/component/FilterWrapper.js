import React from "react";

function FilterWrapper({
  checkboxIncompletedTask,
  handlecheckboxIncompletedTask,
}) {
  return (
    <div className="filter-wrapper">
      <label htmlFor="filter" className="filter-label">
        Show incomplete task only
      </label>
      <input
        type="checkbox"
        id="filter"
        checked={checkboxIncompletedTask}
        onChange={handlecheckboxIncompletedTask}
      />
    </div>
  );
}

export default FilterWrapper;
