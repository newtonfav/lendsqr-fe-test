import React, { useState } from "react";
import LeftArrow from "../assets/icons/left-arrow";
import RightArrow from "../assets/icons/right-arrow";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (query: string, value: string) => void;
}

function Pagination({
  totalPages,
  initialPage = 1,
  onPageChange,
}: PaginationProps) {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange?.("page", String(page));
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 4) {
      // Show all pages if totalPages is 4 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`usersfooter__pagination--page ${
              i === currentPage ? "active" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first page
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`usersfooter__pagination--page ${
            currentPage === 1 ? "active" : ""
          }`}
        >
          1
        </button>
      );

      // Conditionally add left ellipsis if currentPage is far from the beginning
      if (currentPage > 3) {
        pages.push(
          <span key="left-ellipsis" className="ellipsis">
            ...
          </span>
        );
      }

      // Show the current page and one page on either side, limited to four buttons total
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`usersfooter__pagination--page ${
              i === currentPage ? "active" : ""
            }`}
          >
            {i}
          </button>
        );
      }

      // Conditionally add right ellipsis if currentPage is far from the end
      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="right-ellipsis" className="ellipsis">
            ...
          </span>
        );
      }

      // Show last page
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`usersfooter__pagination--page ${
            currentPage === totalPages ? "active" : ""
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="usersfooter__pagination">
      <span
        className="usersfooter__pagination--leftarrow"
        onClick={() => handlePageChange(currentPage - 1)}
        aria-disabled={currentPage === 1}
      >
        <LeftArrow />
      </span>

      <span className="usersfooter__pagination--pages">
        {renderPageNumbers()}
      </span>

      <span
        className="usersfooter__pagination--rightarrow"
        onClick={() => handlePageChange(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
      >
        <RightArrow />
      </span>
    </div>
  );
}

export default Pagination;
