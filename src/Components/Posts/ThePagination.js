import React from "react";

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
    <nav className="pagination m-1">
      <div>
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
      <ul
        className="pagination"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {pageNumbers.map((num) => (
          <li className="page-item" key={num}>
            <button className="page-link" onClick={() => paginate(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
