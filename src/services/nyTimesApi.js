import axios from 'axios';

const API_KEY = 'Az79QorL3jn1o6nUaIP4UIJ1rxjLt61f';
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

export const fetchNYTimesArticles = async (query = '', category = '', date = '') => {
  const params = {
    'api-key': API_KEY,
  };

  if (query) params.q = query;
  if (date) params.begin_date = date;
  if (category) params.fq = `source:("${category}")`;

  try {
    const response = await axios.get(`${BASE_URL}`, { params });
    return response.data.response?.docs;
  } catch (error) {
    console.error('Error fetching articles from New Your times:', error);
    return [];
  }
};

