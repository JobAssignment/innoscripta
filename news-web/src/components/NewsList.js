import React from "react";
import { useNews } from "../store/NewsContext";
import NewsItem from "./NewsItem";
import { Row, Col, Container } from "react-bootstrap";

const NewsList = () => {
  const { allNews, searchResults } = useNews();
  const newsToDisplay = searchResults?.length > 0 ? searchResults : allNews;

  return (
    <Container>
      <h1 className="text-center my-4">News List</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={4}>
        {newsToDisplay?.map((article, index) => (
          <Col
            key={article.title + index}
            className="mb-3"
            style={{ minWidth: "300px" }}
            xs={12} // Set xs={12} to make it take full width on extra-small screens
          >
            <NewsItem article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
