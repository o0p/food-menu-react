import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <h2 className="btn-container">
      {categories.map((category) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems(`${category}`)}>
            {category}
          </button>
        );
      })}
    </h2>
  );
};

export default Categories;
