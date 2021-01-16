import React from "react";

export default function PaginationButtons({ num, onClick }) {
  return (
    <li className="page-item ">
      <button className="page-link bg-dark text-light" onClick={onClick}>
        {num}
      </button>
    </li>
  );
}
