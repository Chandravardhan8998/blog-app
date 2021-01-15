import React from "react";

export default function TR({ children, color = "#aaa" }) {
  return (
    <tr
      style={{
        background: color,
      }}
    >
      {children}
    </tr>
  );
}
