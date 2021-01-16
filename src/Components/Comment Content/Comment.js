import React from "react";
import TD from "../Table Content/TD";
import TR from "../Table Content/TR";

export default function Comment({ postId, name, body, email, id, onDelete }) {
  return (
    <TR color="#eee">
      <TD>{id}</TD>
      <TD>{postId}</TD>
      <TD>{email}</TD>
      <TD>{name}</TD>
      <TD>{body}</TD>
      <TD onClick={onDelete}>Delete</TD>
    </TR>
  );
}
