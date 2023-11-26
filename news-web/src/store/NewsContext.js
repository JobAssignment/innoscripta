import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const updateAllNews = (data) => {
    setAllNews(data);
  };

  const updateSearchResults = (data) => {
    setSearchResults(data);
  };

  return (
    <NewsContext.Provider value={{ allNews, searchResults, updateAllNews, updateSearchResults }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  return useContext(NewsContext);
};
