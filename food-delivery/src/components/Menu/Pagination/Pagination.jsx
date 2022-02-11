import React, { useState } from "react";

import "./Pagination.scss";

export default function Pagination(props) {
  const [pages, setPages] = useState(Math.ceil(props.list.length / props.dataLimit));

  // Changes currentPage to next page
  function goToNextPage() {
    props.setCurrentPage(props.currentPage + 1);
  }

  // Changes currentPage to previous page
  function goToPreviousPage() {
    props.setCurrentPage(props.currentPage - 1);
  }

  // Changes the currentPage to the page number of choice
  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    props.setCurrentPage(pageNumber);
  }

  // Returns the number of items equal to the dataLimit, which will then be displayed to the user
  const getPaginatedData = () => {
    const startIndex = props.currentPage * props.dataLimit - props.dataLimit;
    const endIndex = startIndex + props.dataLimit;
    return props.list.slice(startIndex, endIndex);
  };

  // Returns which group of page numbers should be displayed
  const getPaginationGroup = () => {
    let start = Math.floor((props.currentPage - 1) / props.pageLimit) * props.pageLimit;

    // To stop loop
    if (Math.ceil(props.list.length / props.dataLimit) !== pages) {
      setPages(Math.ceil(props.list.length / props.dataLimit));
    }

    // Chooses the minimum value between the total number of pages and the first page of the groupPagination plus pageLimit
    return new Array(Math.min(Math.ceil(props.list.length / props.dataLimit), start + props.pageLimit))
      .fill()
      .map((_, idx) => start + idx + 1);
  };

  const handleItemClick = (id) => {
    props.onItemClicked(id);
  };

  return (
    <div>
      <div className="data-container">
        {/* Creates a list with the items that contain the searched/paginated value*/}
        {getPaginatedData().map((d, i) => (
          <props.RenderComponent key={i} data={d} onItemClick={handleItemClick} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={goToPreviousPage} className={`prev ${props.currentPage <= 1 ? "disabled" : ""}`}>
          {"<"}
        </button>

        {getPaginationGroup().map((item, i) => (
          <button
            key={i}
            onClick={changePage}
            className={`pagination-item ${props.currentPage === item ? "active" : null} ${
              // Hides pages from PaginationGroup that have no elements
              item * props.dataLimit <= pages * props.dataLimit ? null : "hidden"
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button onClick={goToNextPage} className={`next ${props.currentPage >= pages ? "disabled" : ""}`}>
          {">"}
        </button>
      </div>
    </div>
  );
}
