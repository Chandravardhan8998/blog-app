import React from "react";
import { useSelector } from "react-redux";
import Comments from "../Components/Comment Content/Comments";
import Posts from "../Components/Post Content/Posts";
import TopNavbar from "../Components/TopNavbar";
import Title from "../Components/UI/Title";

export default function Dashboard() {
  const userId = useSelector((state) => state.auth.userId);
  return (
    <div>
      <TopNavbar />
      <Title title="Dashboard">
        <button className="btn btn-primary m-1">Create Post</button>
      </Title>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <Posts title="My Posts" userId={userId} />
          </div>
          <div className="col-7">
            <Comments title="Comments On Your Posts" />
          </div>
        </div>
      </div>
    </div>
  );
}
