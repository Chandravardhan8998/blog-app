import React, { useState } from "react";
import PostDetails from "../Components/Post Content/PostDetails";
import TopNavbar from "../Components/TopNavbar";

export default function PostsPage() {
  const [PostId] = useState(
    new URL(window.location.href).searchParams.get("id")
  );
  return (
    <div>
      <TopNavbar />
      <PostDetails id={+PostId} />
    </div>
  );
}
