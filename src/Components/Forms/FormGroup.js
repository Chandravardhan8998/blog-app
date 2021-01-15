import React from "react";

export default function FormGroupe({ title, children }) {
  return (
    <div class="form-group">
      <label for="exampleFormControlInput1">{title}</label>
      {children}
    </div>
  );
}
