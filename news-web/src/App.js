import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { NewsProvider } from "./store/NewsContext";
import Search from "./components/Search";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import LoadingSpiner from "./components/Loading";
import Error from "./components/Error";
function App() {
  return (
    <div className="App">
      <NewsProvider>
        <Search />
        <Error />
        <LoadingSpiner />
        <NewsList />
        <Pagination />
      </NewsProvider>
    </div>
  );
}

export default App;
