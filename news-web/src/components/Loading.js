import React, { useState, useEffect, Fragment } from "react";
import { Spinner } from "react-bootstrap";
import { useNews } from "../store/NewsContext";

const LoadingSpinner = () => {
  const { loading, setLoading } = useNews();

  return (
    <Fragment>
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : null}
    </Fragment>
  );
};

export default LoadingSpinner;
