import React from "react";
import { Card } from "react-bootstrap";

const NewsItem = ({ article }) => {
  const handleImageError = (e) => {
    // Handle the image loading error here
    // You can set a fallback image or any other appropriate action
    e.target.src = "../common/misc/noimage.jpg";
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={article.urlToImage}
        alt={article.title}
        onError={handleImageError}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.description}</Card.Text>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read more
        </a>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
