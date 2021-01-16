import React from "react";
import Posts from "../Components/Post Content/Posts";
import TopNavbar from "../Components/TopNavbar";

export default function Home({ isAuth }) {
  return (
    <div>
      <TopNavbar isAuth={isAuth} />
      <Posts title="My Posts" userId={null} />
    </div>
  );
}
