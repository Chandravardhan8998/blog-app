import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentsHeader from "./CommentsHeader";
import { ThePagination } from "./ThePagination";
import WriteComment from "./WriteComment";

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
      <div className="card m-2 p-2" style={{ width: "18rem" }}>
        <h5 className="card-title">{Post.title}</h5>
        <p className="card-text">{Post.body}</p>
      </div>
      <table className="px-2" style={{ margin: 10 }}>
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
        </tbody>
        <ThePagination
          postPerPage={postPerPage}
          totalPosts={Comments.length}
          paginate={(num) => {
            setCurrentPage(num);
          }}
          increasePosts={(inc) => setPostPerPage(postPerPage + +inc)}
          decreasePosts={(dec) => setPostPerPage(postPerPage - +dec)}
        />
      </table>
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
