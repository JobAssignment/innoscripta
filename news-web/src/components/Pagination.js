import React from "react";
import { Pagination } from "react-bootstrap";
import { useNews } from "../store/NewsContext"; // Update the path accordingly

const PaginationComponent = () => {
  const { currentPage, totalPages, updatePagination } = useNews();

  // Calculate the range of pages to display
  const startPage = Math.max(1, currentPage - 5);
  const endPage = Math.min(startPage + 5, totalPages);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <div className="d-flex justify-content-center">
      <Pagination>
        <Pagination.Prev
          onClick={() =>
            updatePagination(Math.max(currentPage - 1, 1), totalPages)
          }
        />
        {pageNumbers.map((page) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => updatePagination(page, totalPages)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            updatePagination(Math.min(currentPage + 1, totalPages), totalPages)
          }
        />
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
