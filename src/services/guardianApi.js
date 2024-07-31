import axios from "axios";

const API_KEY = '9cf18305-ce1b-4f29-9d40-5b55654d8b87';
const BASE_URL = 'https://content.guardianapis.com';

export const fetchGuardianArticles = async (
  query = "",
  category = "",
  date = ""
) => {
  const params = {
    'api-key': API_KEY,
  };

  if (query) params.q = query;
  if (date) params["from-date"] = date;
  if (category) params.category = category;

  try {
    const response = await axios.get(`${BASE_URL}/search`, { params });
    return response.data.response.results;
  } catch (error) {
    console.error("Error fetching articles from Guradian api:", error);
    return [];
  }
};
