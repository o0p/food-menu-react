import React from 'react';

const Categories = ({ filterItems }) => {
  return (
    <h2 className="btn-container">
      <button className="filter-btn" onClick={() => filterItems('all')}>
        all
      </button>
      <button className="filter-btn" onClick={() => filterItems('breakfast')}>
        breakfast
      </button>
    </h2>
  );
};

export default Categories;
