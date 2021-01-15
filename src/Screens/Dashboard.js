import React from "react";
import { useSelector } from "react-redux";
import Comments from "../Components/Posts/Comments";
import Posts from "../Components/Posts/Posts";
import TopNavbar from "../Components/TopNavbar";

export default function Dashboard() {
  const userId = useSelector((state) => state.auth.userId);
  console.log(userId);
  return (
    <div>
      <TopNavbar />
      <h1>Dashboard</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <Posts title="My Posts" userId={userId} />
        </div>
        <div style={{ flex: 1 }}>
          <Comments title="Comments On Your Posts" />
        </div>
      </div>
    </div>
  );
}
