import React, { Fragment } from "react";
import PaginationButtons from "./PaginationButtons";

export const ThePagination = ({
  postPerPage,
  totalPosts,
  paginate,
  increasePosts,
  decreasePosts,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <button
            className="btn btn-primary m-1"
            onClick={() => {
              increasePosts(3);
            }}
          >
            +3
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => {
              decreasePosts(3);
            }}
          >
            -3
          </button>
        </div>
        <div className="col-8">
          <ul className="pagination p-3 m-1 ">
            {pageNumbers.map((num) => (
              <PaginationButtons
                num={num}
                onClick={() => paginate(num)}
                key={num}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
