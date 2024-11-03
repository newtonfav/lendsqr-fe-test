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
    const showEllipsisLeft = currentPage > 3;
    const showEllipsisRight = currentPage < totalPages - 2;

    if (totalPages <= 5) {
      // Show all pages if totalPages is 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            aria-label="page number"
            onClick={() => handlePageChange(i)}
            className={`usersfooter__pagination--page ${
              i === currentPage ? "usersfooter__pagination--active" : ""
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Always show first page
      pages.push(
        <button
          key={1}
          aria-label="page number"
          onClick={() => handlePageChange(1)}
          className={`usersfooter__pagination--page ${
            currentPage === 1 ? "usersfooter__pagination--active" : ""
          }`}
        >
          1
        </button>
      );

      if (showEllipsisLeft) {
        pages.push(
          <span key="left-ellipsis" className="ellipsis">
            ...
          </span>
        );
      }

      // Calculate the range of pages to show around current page
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      // Adjust range when near the beginning or end
      if (currentPage <= 3) {
        startPage = 2;
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      // Render middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            aria-label="page number"
            onClick={() => handlePageChange(i)}
            className={`usersfooter__pagination--page ${
              i === currentPage ? "usersfooter__pagination--active" : ""
            }`}
          >
            {i}
          </button>
        );
      }

      if (showEllipsisRight) {
        pages.push(
          <span key="right-ellipsis" className="ellipsis">
            ...
          </span>
        );
      }

      // Always show last page
      pages.push(
        <button
          key={totalPages}
          aria-label="page number"
          onClick={() => handlePageChange(totalPages)}
          className={`usersfooter__pagination--page ${
            currentPage === totalPages ? "usersfooter__pagination--active" : ""
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
      <button
        data-testid="left-arrow-pagination"
        aria-label="previous page button"
        className="usersfooter__pagination--leftarrow"
        onClick={() => handlePageChange(currentPage - 1)}
        aria-disabled={currentPage === 1}
        disabled={currentPage === 1}
      >
        <LeftArrow />
      </button>

      <span className="usersfooter__pagination--pages">
        {renderPageNumbers()}
      </span>

      <button
        data-testid="right-arrow-pagination"
        aria-label="next page button"
        className="usersfooter__pagination--rightarrow"
        onClick={() => handlePageChange(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        disabled={currentPage === totalPages}
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Pagination;
