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
      <h1>{Post.title}</h1>
      <p>{Post.body}</p>
      <table>
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
