import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentsHeader from "./CommentsHeader";
import { ThePagination } from "./ThePagination";

export default function Comments({ title = "Comments" }) {
  const [Comments, setComments] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = Comments.slice(firstPost, indexOfLastPost);

  const { posts } = useSelector((state) => state.posts);
  const { userId } = useSelector((state) => state.auth);
  useEffect(() => {
    const fun = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const comment = await res.json();

      let myPosts = posts.filter((p) => p.userId === +userId);
      myPosts = myPosts.map((p) => p.id);

      let myComments = comment.filter((c) => myPosts.includes(c.postId));
      setComments(myComments);
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
                    setComments(() =>
                      Comments.filter((p) => {
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
        totalPosts={Comments.length}
        paginate={(num) => {
          setCurrentPage(num);
        }}
        increasePosts={(inc) => setPostPerPage(postPerPage + +inc)}
        decreasePosts={(dec) => setPostPerPage(postPerPage - +dec)}
      />
    </div>
  );
}
