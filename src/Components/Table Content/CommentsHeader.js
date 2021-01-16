import React from "react";
import TD from "./TD";
import TR from "./TR";
export default function CommentsHeader() {
  return (
    <thead className="thead-dark">
      <TR>
        <TD>Id</TD>
        <TD>Post Id</TD>
        <TD>Email</TD>
        <TD>Title</TD>
        <TD>Description</TD>
        <TD>Action</TD>
      </TR>
    </thead>
  );
}
