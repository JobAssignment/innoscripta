import React from 'react';
import { useNews } from '../store/NewsContext';
import NewsItem from './NewsItem';

const NewsList = () => {
  const { allNews, searchResults } = useNews();
  const newsToDisplay = searchResults?.length > 0 ? searchResults : allNews;

  return (
    <div>
      <h1>News List</h1>
      {newsToDisplay.map((article,index) => (
        <NewsItem key={article.title + index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
