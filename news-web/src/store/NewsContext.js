import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const updateAllNews = (data) => {
    setAllNews(data);
  };

  const updateSearchResults = (data) => {
    const { datalist, pages } = data;
    setSearchResults(data);
    // Assuming your API response includes information about total pages
    setTotalPages(pages || 1);
  };

  const updatePagination = (newPage, newTotalPages) => {
    setCurrentPage(newPage);
    setTotalPages(newTotalPages);
  };

  return (
    <NewsContext.Provider
      value={{
        allNews,
        searchResults,
        currentPage,
        totalPages,
        updateAllNews,
        updateSearchResults,
        updatePagination,
        setLoading,
        loading,
        setError,
        error,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  return useContext(NewsContext);
};
