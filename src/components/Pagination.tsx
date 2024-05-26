import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/circle-button.css";
import "../styles/custom-pagination.css";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const CustomPagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center g-3 mt-3">
        {[...Array(pageCount)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""} ps-3 `}
          >
            <button
              className="page-link rounded-circle "
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
              {currentPage === index + 1 && <span className="sr-only"></span>}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === pageCount ? "disabled" : ""} ps-3`}
        >
          <button
            className="page-link rounded-circle"
            aria-label="Next"
            onClick={() => handlePageClick(currentPage + 1)}
            style={{ border: "none" }}
          >
            <span aria-hidden="true">
              <i className="bi bi-arrow-right "></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default CustomPagination;
