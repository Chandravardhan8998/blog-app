import React from "react";
import { useSelector } from "react-redux";
import Posts from "../Components/Posts/Posts";
import TopNavbar from "../Components/TopNavbar";

export default function Home({ isAuth }) {
  return (
    <div>
      <TopNavbar isAuth={isAuth} />
      <Posts
        title="My Posts"
        userId={useSelector((state) => state.auth.userId)}
      />
    </div>
  );
}
