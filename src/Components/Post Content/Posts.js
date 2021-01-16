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
  const [ShowHide2, setShowHide2] = useState(false);
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const [PostTitle, setPostTitle] = useState("");
  const [PostBody, setPostBody] = useState("");
  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = Posts.slice(firstPost, indexOfLastPost);
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
  }, [posts, ShowHide, ShowModal]);
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
              <>
                <Post
                  onEdit={() => {
                    setPostBody(post.body);
                    setPostTitle(post.title);
                    setShowHide2(true);
                  }}
                  description={post.body}
                  id={post.id}
                  title={post.title}
                  key={post.id}
                  onDelete={() => {
                    setPosts(() => Posts.filter((p) => p.id !== post.id));
                    alert("Deleted Successfully");
                  }}
                />
                <TheModal
                  ShowHide={ShowHide2}
                  onCloseModal={() => setShowHide2(false)}
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
                    // onCloseModal();
                    setShowHide2(false);
                  }}
                  body={post.body}
                  title={post.title}
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
