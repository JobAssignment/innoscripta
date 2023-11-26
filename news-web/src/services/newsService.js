import axios from "axios";
import {apiKeys,apiUrls} from "../config";
const API_KEY = apiKeys["newYorkApi"]
const BASE_URL = apiUrls["newYorkApi"];
const NEW_YORK_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

export const fetchNews = async (searchTerm) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        "api-key": API_KEY,
        q: searchTerm,
      },
    });
  console.log("res",response.data?.response?.docs)
  const list = response.data.articles;
  return list;
  } catch (error) {
    console.error("Error fetching news:", error);
        console.error("BASE_URL:", BASE_URL,"API_KEY",API_KEY);

    throw error;
  }
};

