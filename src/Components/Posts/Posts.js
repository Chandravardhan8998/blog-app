import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostHeader from "./PostHeader";
import { ThePagination } from "./ThePagination";

export default function Posts({ userId = null, title = "Posts" }) {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = Posts.slice(firstPost, indexOfLastPost);

  useEffect(() => {
    const fun = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      if (!!userId) {
        console.log(userId);
        let post = posts.filter((p) => p.userId === +userId);
        setPosts(post);
      } else {
        setPosts(posts);
      }
      setLoading(false);
    };
    fun();
  }, []);
  if (Loading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div className="m-4">
      <h1>{title}</h1>
      <table className="px-2">
        <PostHeader />
        <tbody>
          {currentPosts.map((post) => {
            return (
              <Post
                description={post.body}
                id={post.id}
                title={post.title}
                key={post.id}
                onDelete={() => {
                  setPosts(() => Posts.filter((p) => p.id !== post.id));
                  alert("Deleted Successfully");
                }}
              />
            );
          })}
        </tbody>
      </table>
      <ThePagination
        postPerPage={postPerPage}
        totalPosts={Posts.length}
        paginate={(num) => {
          setCurrentPage(num);
        }}
        increasePosts={(inc) => setPostPerPage(postPerPage + +inc)}
        decreasePosts={(dec) => setPostPerPage(postPerPage - +dec)}
      />
    </div>
  );
}
