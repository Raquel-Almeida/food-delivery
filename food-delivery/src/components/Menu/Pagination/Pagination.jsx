import React, { useState } from "react";

import "./Pagination.scss";

export default function Pagination(props) {
  const [pages] = useState(Math.round(props.list.length / props.dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function goToPreviousPage() {
    setCurrentPage(currentPage - 1);
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * props.dataLimit - props.dataLimit;
    const endIndex = startIndex + props.dataLimit;
    return props.list.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;
    return new Array(props.pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div>
        <div className="dataContainer">
          {getPaginatedData().map((d, i) => (
            <props.RenderComponent key={i} data={d} />
          ))}
        </div>
        <div className="pagination">
          <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
            prev
          </button>

          {getPaginationGroup().map((item, i) => (
            <button key={i} onClick={changePage} className={`paginationItem ${currentPage === item ? "active" : null}`}>
              <span>{item}</span>
            </button>
          ))}

          <button onClick={goToNextPage} className={`next ${currentPage === pages ? "disabled" : ""}`}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
