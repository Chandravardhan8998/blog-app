import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comment Content/Comment";
import CommentsHeader from "../Table Content/CommentsHeader";
import { ThePagination } from "../Table Content/ThePagination";
import WriteComment from "../Comment Content/WriteComment";
import TheCard from "../UI/TheCard";
import { fetchComment } from "../../Store/Action/posts";
import { fetchUser } from "../../Store/Action/auth";
import Loader from "../UI/Loader";

export default function PostDetails({ id }) {
  const dispatch = useDispatch();
  const [Post, setPost] = useState({});
  const [Comments, setComments] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { posts, comments } = useSelector((state) => state.posts);
  dispatch(fetchComment());
  dispatch(fetchUser());
  useEffect(() => {
    setLoading(true);
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
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, posts]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentComments = Comments.slice(firstPost, indexOfLastPost);
  if (Loading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
          <div className="col-3">
            {!!Post && <TheCard body={Post.body} title={Post.title} />}
          </div>
          <div className="col-9">
            {!!Comments.length ? (
              <table className="m-2">
                <CommentsHeader />
                <tbody>
                  {currentComments.map((cc) => (
                    <Comment
                      body={cc.body}
                      email={cc.email}
                      name={cc.name}
                      postId={cc.postId}
                      key={cc.id}
                      id={cc.id}
                      onDelete={() => {
                        setComments(() =>
                          Comments.filter((c) => c.id !== cc.id)
                        );
                        // alert("Deleted Successfully");
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
            ) : (
              <h1 className="text-center p-1 bg-dark text-light">
                No Comments To Show
              </h1>
            )}
          </div>
        </div>
      </div>
      <WriteComment
        postId={id}
        onCommentsSubmit={(newComments) => {
          let oldComments = Comments;
          console.log(oldComments);
          let newComments2 = oldComments.concat(newComments);
          console.log(newComments2);
          setComments(newComments2);
        }}
      />
    </div>
  );
}
