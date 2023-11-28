import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import noImage from "../common/misc/noImage.jpg";
import newYorkImge from "../common/misc/newyorkimge.jpg";
import gurdian from "../common/misc/gurdian.png";
import { NewsSources } from "../common/constant";

const NewsItem = ({ article }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleImageError = (e) => {
    console.error("handleImageError", e);
    e.target.src = "../common/misc/noImage.jpg";
  };

  const truncatedDescription =
    article.description && !showFullDescription
      ? `${article.description.slice(0, 150)}...`
      : article.description;

  return (
    <Card style={{ width: "18rem", height: "25rem" }}>
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {getImageNews(article)}
        <Card.Title>{article.title}</Card.Title>
        <Card.Text
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {truncatedDescription}
          {article.description && !showFullDescription && (
            <Button
              variant="link"
              size="sm"
              onClick={() => setShowFullDescription(true)}
            >
              Read more
            </Button>
          )}
        </Card.Text>
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

const getImageNews = (article) => {
  switch (article.apiUsed) {
    case NewsSources.NEW_YORK_API:
      return (
        <Card.Img
          style={{ maxHeight: "15rem", objectFit: "cover" }}
          variant="top"
          src={newYorkImge}
          alt={article.title}
        />
      );

    case NewsSources.GUARDIAN_API:
      return (
        <Card.Img
          style={{ maxHeight: "15rem", objectFit: "cover" }}
          variant="top"
          src={gurdian}
          alt={article.title}
        />
      );

    default:
      return (
        <Card.Img
          style={{ maxHeight: "15rem", objectFit: "cover" }}
          variant="top"
          src={article.urlToImage}
          alt={article.title}
        />
      );
  }
};

export default NewsItem;
