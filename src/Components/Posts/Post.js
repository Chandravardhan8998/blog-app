import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import TD from "./TD";
import TR from "./TR";

export default function Post({ id, title, description, onDelete, onEdit }) {
  const [Liked, setLiked] = useState(false);
  return (
    <Fragment>
      <TR color="#eee">
        <TD>
          <Link to={`/post?id=${+id}`}>{id}</Link>
        </TD>
        <TD>{title}</TD>
        <TD>{description}</TD>
        <TD>edit</TD>
        <TD onClick={onDelete}>delete</TD>
        <TD onClick={() => setLiked(!Liked)}>{Liked ? "Unlike" : "Like"}</TD>
      </TR>
    </Fragment>
  );
}
