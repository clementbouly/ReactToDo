import React from "react";

function FilterTask({ filterName, onFilter }) {
  return (
    <button
      className="btn btn-secondary mr-2"
      onClick={() => onFilter(filterName)}
    >
      {filterName}
    </button>
  );
}

export default FilterTask;
