import React, { useState ,useEffect} from "react";
import { useNews } from "../store/NewsContext";
import { fetchNews } from "../services/newsService";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import _debounce from "lodash/debounce";

const Search = () => {
  const { updateNews,updateSearchResults } = useNews();
  const [searchTerm, setSearchTerm] = useState("");

  // Define a debounce function with a delay of 500 milliseconds
  const debouncedSearch = _debounce(async (term) => {
    try {
      const newsData = await fetchNews(term);
      updateSearchResults(newsData);
    } catch (error) {
      // Handle error
    }
  }, 5000);

    useEffect(() => {
    debouncedSearch(searchTerm);
    // Cleanup the debounced function on component unmount
    return () => debouncedSearch.cancel();
  }, [searchTerm]);

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Enter search term"
        aria-label="Enter search term"
        aria-describedby="basic-addon2"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
         
        }}
      />
        <Button variant="outline-secondary" onClick={debouncedSearch}>
          Search
        </Button>
    </InputGroup>
  );
};

export default Search;
