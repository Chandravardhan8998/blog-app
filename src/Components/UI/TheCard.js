import React from "react";
import Title from "./Title";

export default function TheCard({ title, body }) {
  return (
    <div className="card m-2 p-3 shadow" style={{ width: "90%" }}>
      <Title title="Post" helperText="Do Comment and share" />
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{body}</p>
    </div>
  );
}
