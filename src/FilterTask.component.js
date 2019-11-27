import React from "react";

function FilterTask({ filterName, onFilter }) {
  return (
    <button
      className="btn btn-secondary mr-2 filterAll"
      onClick={() => onFilter(filterName)}
    >
      {filterName}
    </button>
  );
}

export default FilterTask;
