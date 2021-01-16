import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "../Comment Content/Comment";
import CommentsHeader from "../Table Content/CommentsHeader";
import { ThePagination } from "../Table Content/ThePagination";
import WriteComment from "../Comment Content/WriteComment";
import TheCard from "../UI/TheCard";

export default function PostDetails({ id }) {
  const { posts, comments } = useSelector((state) => state.posts);
  const [Post, setPost] = useState({});
  const [Comments, setComments] = useState([]);
  useEffect(() => {
    const MyPost =
      posts &&
      posts.filter((p) => {
        return p.id === +id;
      });
    setPost(MyPost[0]);
    const MyComments = comments.filter((c) => {
      return c.postId === +id;
    });
    setComments(MyComments);
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentComments = Comments.slice(firstPost, indexOfLastPost);
  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
          <div className="col-3">
            <TheCard body={Post.body} title={Post.title} />
          </div>
          <div className="col-9">
            <table className="m-2">
              <CommentsHeader />
              <tbody>
                {currentComments.map(({ body, email, name, postId, id }) => (
                  <Comment
                    body={body}
                    email={email}
                    name={name}
                    postId={postId}
                    key={id}
                    id={id}
                    onDelete={() => {
                      setComments(() => Comments.filter((c) => c.id !== id));
                      alert("Deleted Successfully");
                    }}
                  />
                ))}
                <ThePagination
                  postPerPage={postPerPage}
                  totalPosts={Comments.length}
                  paginate={(num) => {
                    setCurrentPage(num);
                  }}
                  increasePosts={(inc) => setPostPerPage(postPerPage + +inc)}
                  decreasePosts={(dec) => setPostPerPage(postPerPage - +dec)}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <WriteComment
        postId={id}
        onCommentsSubmit={(newComments) => {
          let oldComments = Comments;
          setComments(oldComments.concat(newComments));
        }}
      />
    </div>
  );
}
