import React, { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const Filter = () => {
  const { dispatch } = useContext(NewsContext);

  const handleFilterChange = (type) => (event) => {
    dispatch({ type: 'SET_FILTERS', payload: { [type]: event.target.value } });
  };

  return (
    <div className="filter">
      <select onChange={handleFilterChange('category')}>
        <option value="">Select Category</option>
        <option value="technology">Technology</option>
        <option value="business">Business</option>
        <option value="sports">Sports</option>
      </select>
      <input type="date" onChange={handleFilterChange('date')} />
      <select onChange={handleFilterChange('source')}>
        <option value="">Select Source</option>
        <option value="cbs-news">CBS News</option>
        <option value="il-sole-24-ore">Il Sole 24 Ore</option>
        <option value="bbc-sport">BBC Sport</option>
        <option value="financial-post">Financial Post</option>
        <option value="entertainment-weekly">Entertainment Weekly</option>
      </select>
    </div>
  );
};

export default Filter;
