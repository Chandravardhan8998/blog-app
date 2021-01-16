import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostHeader from "../Table Content/PostHeader";
import { ThePagination } from "../Table Content/ThePagination";
import Title from "../UI/Title";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader";

export default function Posts({ userId = null, title = "Posts" }) {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = Posts.slice(firstPost, indexOfLastPost);
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    setLoading(true);
    const fun = async () => {
      if (!!userId) {
        console.log(userId);
        let post = posts.filter((p) => p.userId === +userId);
        setPosts(post);
        setLoading(false);
      } else {
        setPosts(posts);
        setLoading(false);
      }
    };
    fun();
  }, [posts]);
  if (Loading) {
    return <Loader />;
  }
  return (
    <div>
      <Title title={title} />
      <table className={!userId ? "m-3" : ""}>
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
