import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import CommentsHeader from "./CommentsHeader";
import { ThePagination } from "./ThePagination";

export default function Comments({ title = "Comments" }) {
  const [Posts, setPosts] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentPosts = Posts.slice(firstPost, indexOfLastPost);

  const { posts } = useSelector((state) => state.posts);
  const { userId } = useSelector((state) => state.auth);
  useEffect(() => {
    const fun = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const comment = await res.json();

      let myPosts = posts.filter((p) => p.userId === +userId);
      myPosts = myPosts.map((p) => p.id);

      let myComments = comment.filter((c) => myPosts.includes(c.postId));
      setPosts(myComments);
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
    <div>
      <h1>{title}</h1>
      <div>
        <table>
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
                    setPosts(() =>
                      Posts.filter((p) => {
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
