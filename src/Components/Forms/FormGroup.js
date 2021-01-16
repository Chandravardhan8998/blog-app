import React, { Fragment } from "react";

export default function FormGroupe({ title, children }) {
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <label htmlFor={title} className="label p-1">
            {title}
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col">{children}</div>
      </div>
    </Fragment>
  );
}
