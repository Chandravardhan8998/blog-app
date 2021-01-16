import React from "react";

export default function TheCard({ title, body }) {
  return (
    <div className="card m-2 p-2 shadow" style={{ width: "18rem" }}>
      <h3 className="card-title ">Post</h3>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </div>
  );
}
