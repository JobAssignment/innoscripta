import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { NewsProvider } from "./store/NewsContext";
import Search from "./components/Search";
import NewsList from "./components/NewsList";

function App() {
  return (
    <div className="App">
      <NewsProvider>
        <Search />
        <NewsList />
      </NewsProvider>
    </div>
  );
}

export default App;
