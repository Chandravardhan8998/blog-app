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
    <nav>
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
        style={{
          display: "inline",
        }}
      >
        {pageNumbers.map((num) => (
          <li key={num} style={{ display: "inline" }}>
            <button
              className="btn btn-primary m-1"
              onClick={() => paginate(num)}
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
