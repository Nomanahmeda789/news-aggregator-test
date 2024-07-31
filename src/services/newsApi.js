import axios from 'axios';

const API_KEY = '4ed1e45ec637476393f3db31e715236d';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (query = '', category = '', date = '', source = '') => {
  const params = {
    apiKey: API_KEY,
  };

  if (query) params.q = query;
  if (date) params.from = date;

  if (source) {
    params.sources = source;
  } else if (category) {
    params.category = category;
  }

  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, { params });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles from NewsAPI:', error);
    return [];
  }
};

