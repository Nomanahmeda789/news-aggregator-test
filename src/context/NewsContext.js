import React, { createContext, useReducer } from 'react';

const initialState = {
  articles: [],
  filters: {
    query: '',
    category: '',
    date: '',
    source: '',
  },
  preferences: {
    sources: [],
    categories: [],
    authors: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return { ...state, articles: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_PREFERENCES':
      return { ...state, preferences: { ...state.preferences, ...action.payload } };
    default:
      return state;
  }
};

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
};
