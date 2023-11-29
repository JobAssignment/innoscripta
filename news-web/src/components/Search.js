import React, { useState, useEffect } from "react";
import { useNews } from "../store/NewsContext";
import { fetchNews } from "../services/newsService";
import {
  FormControl,
  Button,
  Dropdown,
  Spinner,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { NewsSources } from "../common/constant";

const Search = () => {
  const {
    currentPage,
    updateSearchResults,
    updatePagination,
    loading,
    setLoading,
    setError,
  } = useNews();

  const newsSources = [
    NewsSources.NEWS_API,
    NewsSources.GUARDIAN_API,
    NewsSources.NEW_YORK_API,
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchSource, setSearchSource] = useState(NewsSources.NEWS_API);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    searchTerm && handleSearch();
  }, [currentPage]);

  useEffect(() => {
    updatePagination(1, 1);
  }, [searchSource]);

  const handleSourceSelect = (selectedSource) => {
    setSearchSource(selectedSource);
  };

  const handleSearch = async () => {
    const searchOptions = {
      searchTerm,
      searchSource,
      pageToSearch: currentPage,
      searchCategory,
      fromDate,
      toDate,
    };

    try {
      setLoading(true);
      updateSearchResults([]);

      const newsData = await fetchNews(searchOptions);
      const { pages, newsList } = newsData;
      updateSearchResults(newsList);
      updatePagination(currentPage, pages);
    } catch (err) {
      setError(err.message);
      console.error("error in handleSearch", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <FormControl
            placeholder="Enter search term"
            aria-label="Enter search term"
            aria-describedby="basic-addon2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <FormControl
            placeholder="Enter search Category"
            aria-label="Enter search Category"
            aria-describedby="basic-addon2"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          />
        </Col>
        <Col xs={12} md={2} className="mb-3 mb-md-0">
          <Dropdown onSelect={handleSourceSelect} className="d-flex">
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-basic"
              className="w-100"
            >
              {searchSource}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {newsSources.map((source, index) => (
                <Dropdown.Item key={index} eventKey={source}>
                  {source}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={12} md={2} className="mb-3 mb-md-0">
          <Button
            variant="outline-secondary"
            onClick={handleSearch}
            disabled={loading}
            className="w-100"
          >
            {loading ? (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              "Search"
            )}
          </Button>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            placeholderText="From Date"
            dateFormat="yyyy-MM-dd"
            className="w-100 form-control mt-2"
          />
        </Col>
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            placeholderText="To Date"
            dateFormat="yyyy-MM-dd"
            className="w-100 form-control mt-2"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
