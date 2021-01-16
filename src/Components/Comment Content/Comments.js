import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentsHeader from "../Table Content/CommentsHeader";
import { ThePagination } from "../Table Content/ThePagination";
import Title from "../UI/Title";

export default function Comments({ title = "Comments" }) {
  const { userId } = useSelector((state) => state.auth);
  // const { posts } = useSelector((state) => state.posts);
  const getPosts = async () => {
    let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await posts.json();
    let myPosts = posts.filter((p) => p.userId === +userId);
    return myPosts.map((p) => p.id);
  };
  const getMyComments = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comments = await res.json();
    let postsArray = await getPosts();
    let myCommentsOnly = comments.filter((c) => postsArray.includes(c.postId));
    return myCommentsOnly;
  };
  const [TheComments, setTheComments] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = TheComments.slice(firstPost, indexOfLastPost);

  useEffect(() => {
    getMyComments().then((res) => {
      setTheComments(res);
      setLoading(false);
    });
  }, []);
  if (Loading) {
    console.log("loading");
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  return (
    <div>
      <Title title={title} />
      <div>
        <table className="table">
          <CommentsHeader />
          <tbody>
            {currentPosts.map(({ body, email, name, postId, id }) => {
              return (
                <Comment
                  body={body}
                  email={email}
                  name={name}
                  postId={postId}
                  key={id}
                  id={id}
                  onDelete={() => {
                    setTheComments(() =>
                      TheComments.filter((p) => {
                        return p.id !== id;
                      })
                    );
                    alert("Deleted Successfully");
                  }}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <ThePagination
        postPerPage={postPerPage}
        totalPosts={TheComments.length}
        paginate={(num) => {
          setCurrentPage(num);
        }}
        increasePosts={(inc) => setPostPerPage(postPerPage + +inc)}
        decreasePosts={(dec) => setPostPerPage(postPerPage - +dec)}
      />
    </div>
  );
}
