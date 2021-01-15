import React from "react";
import TD from "./TD";

export default function Comment({ postId, name, body, email, id, onDelete }) {
  return (
    <tr>
      <TD>{id}</TD>
      <TD>{postId}</TD>
      <TD>{email}</TD>
      <TD>{name}</TD>
      <TD>{body}</TD>
      <TD onClick={onDelete}>Delete</TD>
    </tr>
  );
}
