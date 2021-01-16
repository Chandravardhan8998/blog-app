import React from "react";
import TD from "./TD";
import TR from "./TR";

export default function PostHeader() {
  return (
    <thead>
      <TR>
        <TD>Id</TD>
        <TD>Title</TD>
        <TD>Description</TD>
        <TD>Action</TD>
        <TD>Action</TD>
        <TD>Action</TD>
      </TR>
    </thead>
  );
}
