import React from "react";

export default function Title({ title, helperText, children }) {
  return (
    <div className="jumbotron jumbotron-fluid p-3 bg-warning text-dark">
      <div className="container">
        <h1 className="display-4">{title}</h1>
        <p className="lead">{helperText}</p>
        {children}
      </div>
    </div>
  );
}
