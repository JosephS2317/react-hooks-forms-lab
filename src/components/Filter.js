import React from "react";

function Filter({ search, handleCategoryChange, onSearchChange }) {

  return (
    <div className="Filter">
      <form>
        <input onChange={onSearchChange} value={search} type="text" name="search" placeholder="Search..." />
      </form>
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
