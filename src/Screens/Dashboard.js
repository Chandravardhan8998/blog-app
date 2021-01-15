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
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <h3>Dashboard</h3>
        <button className="btn btn-primary m-1">Create Post</button>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1, margin: 10 }}>
          <Posts title="My Posts" userId={userId} />
        </div>
        <div style={{ flex: 1, margin: 10 }}>
          <Comments title="Comments On Your Posts" />
        </div>
      </div>
    </div>
  );
}
