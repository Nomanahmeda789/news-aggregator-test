import React, { useContext, useEffect } from 'react';
import { NewsContext } from './context/NewsContext';
import { fetchArticlesFromAllSources } from './services/newsService';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import ArticleList from './components/ArticleList';
import Settings from './components/Settings';
import './App.css';

function App() {
  const { state, dispatch } = useContext(NewsContext);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchArticlesFromAllSources(state.filters, state.preferences);
      dispatch({ type: 'SET_ARTICLES', payload: articles });
    };
    getArticles();
  }, [state.filters, state.preferences, dispatch]);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Filter />
      <Settings articles={state.articles} />
      <ArticleList articles={state.articles} />
    </div>
  );
}

export default App;
