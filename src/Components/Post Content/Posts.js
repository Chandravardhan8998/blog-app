import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostHeader from "../Table Content/PostHeader";
import { ThePagination } from "../Table Content/ThePagination";
import Title from "../UI/Title";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader";

import TheModal from "../UI/TheModal";

export default function Posts({
  ShowModal = false,
  onCloseModal,
  userId = null,
  title = "Posts",
}) {
  const [ShowHide, setShowHide] = useState(false);
  // const [ShowHide2, setShowHide2] = useState(false);
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [PostTitle] = useState("");
  const [PostBody] = useState("");
  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const CurrentPosts = Posts.slice(firstPost, indexOfLastPost);
  // const [CurrentPosts, setCurrentPosts] = useState(Posts.slice(firstPost, indexOfLastPost);)
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    setShowHide(ShowModal);
    setLoading(true);
    const fun = async () => {
      if (!!userId) {
        let post = posts.filter((p) => p.userId === +userId);
        setPosts(post);
        setLoading(false);
      } else {
        setPosts(posts);
        setLoading(false);
      }
    };
    fun();
  }, [posts, ShowHide, ShowModal, userId]);
  if (Loading) {
    return <Loader />;
  }
  return (
    <div>
      <Title title={title} />
      <table className={!userId ? "m-3" : ""}>
        <PostHeader />
        <tbody>
          {CurrentPosts.map((post) => {
            return (
              <>
                <Post
                  // key={post.id}
                  key={post.id}
                  onEdit={() => {
                    // setPostBody(post.body);
                    // setPostTitle(post.title);
                    // setShowHide2(true);
                  }}
                  description={post.body}
                  id={post.id}
                  title={post.title}
                  onDelete={() => {
                    // setCurrentPosts()
                    setPosts(() => Posts.filter((p) => p.id !== post.id));
                  }}
                />
              </>
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
      <TheModal
        ShowHide={ShowHide}
        onCloseModal={onCloseModal}
        userId={userId}
        onSubmit={(e, res) => {
          e.preventDefault();
          let NewPosts = Posts;
          console.log("OLD", NewPosts);
          NewPosts.push({
            title: res.title,
            body: res.body,
            id: res.id,
            userId: res.userId,
          });
          console.log("NEW", {
            title: res.title,
            body: res.body,
            id: res.id,
            userId: res.userId,
          });
          setPosts(NewPosts);
          onCloseModal();
          setShowHide(false);
        }}
        body={PostBody}
        title={PostTitle}
      />
    </div>
  );
}
