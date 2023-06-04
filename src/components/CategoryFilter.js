import React from "react";

function CategoryFilter({categoryList, onCategoryChange}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryList.map((category) => <button key= {category} value={category} onClick={onCategoryChange} >{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
