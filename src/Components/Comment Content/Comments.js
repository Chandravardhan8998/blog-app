import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "./Comment";
import CommentsHeader from "../Table Content/CommentsHeader";
import { ThePagination } from "../Table Content/ThePagination";
import Title from "../UI/Title";
import { cvs_fetch } from "../../utility";
import { fetchUser } from "../../Store/Action/auth";
import { fetchComment } from "../../Store/Action/posts";
import Loader from "../UI/Loader";

export default function Comments({ title = "Comments" }) {
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [TheComments, setTheComments] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = TheComments.slice(firstPost, indexOfLastPost);
  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.posts.comments);
  dispatch(fetchComment());
  useEffect(() => {
    let postsArray = posts.map((p) => p.id);
    let myCommentsOnly = comments.filter((c) => postsArray.includes(c.postId));
    setTheComments(myCommentsOnly);
    setLoading(false);
  }, [dispatch, posts, comments]);
  if (Loading) {
    return <Loader />;
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
