import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const SearchBar = () => {
  const { dispatch } = useContext(NewsContext);

  const handleSearch = (event) => {
    dispatch({ type: 'SET_FILTERS', payload: { query: event.target.value } });
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search articles..." onChange={handleSearch} />
    </div>
  );
};

export default SearchBar;
