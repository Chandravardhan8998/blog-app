import React from "react";
import Posts from "../Components/Posts/Posts";
import TopNavbar from "../Components/TopNavbar";

export default function Home({ isAuth }) {
  return (
    <div>
      <TopNavbar isAuth={isAuth} />
      <Posts />
    </div>
  );
}
