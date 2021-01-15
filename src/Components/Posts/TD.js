import React from "react";

export default function TD({ children, ...props }) {
  return (
    <td {...props} style={{ border: "1px solid #000", padding: 3 }}>
      {children}
    </td>
  );
}
