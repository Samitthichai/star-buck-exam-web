import React from "react";
import { Pagination } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
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
    <nav className="" aria-label="Page navigation">
      <ul className="pagination" style={{ width: 'auto' }}>
        {[...Array(pageCount)].map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
            
          >
            <button
              className="page-link rounded-circle"
              onClick={() => handlePageClick(index + 1)}
              style={{ width: "50px", height:"50px" }}
            >
              {index + 1}
              {currentPage === index + 1 && <span className="sr-only"></span>}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}
          
        >
          <i
            className="bi bi-arrow-right" 
            onClick={() => handlePageClick(currentPage + 1)}
            style={{ width: "50px", height:"50px" }}          ></i>
        </li>
      </ul>
    </nav>
  );
};

export default CustomPagination;
