import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import { useNews } from "../store/NewsContext"; // Update the path accordingly

const Error= () => {
  const { error, setError } = useNews();

  useEffect(() => {
    if (error) {
      // Automatically clear the error after 3 seconds
      const timeoutId = setTimeout(() => {
        setError(null);
      }, 4000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [error, setError]);

  return (
    <>
      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}
    </>
  );
};

export default Error;
