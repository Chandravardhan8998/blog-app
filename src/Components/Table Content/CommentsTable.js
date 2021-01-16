import React, { useEffect, useState } from "react";
import Comment from "../Comment Content/Comment";
import CommentsHeader from "./CommentsHeader";
import { ThePagination } from "./ThePagination";

export default function CommentsTable({ data = [] }) {
  const [AllComments, setAllComments] = useState(data);
  useEffect(() => {
    return setAllComments(data);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const firstPost = indexOfLastPost - postPerPage;
  const currentComments = AllComments.slice(firstPost, indexOfLastPost);

  return (
    <div>
      <table>
        <CommentsHeader />
        <tbody>
          {currentComments.map(({ body, email, name, postId, id }) => {
            return (
              <Comment
                body={body}
                email={email}
                name={name}
                postId={postId}
                key={id}
                id={id}
                onDelete={() => {
                  setAllComments(() =>
                    AllComments.filter((p) => {
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
      <ThePagination
        postPerPage={postPerPage}
        totalPosts={AllComments.length}
        paginate={(num) => {
          setCurrentPage(num);
        }}
        increasePosts={(inc) => setPostPerPage(postPerPage + +inc)}
        decreasePosts={(dec) => setPostPerPage(postPerPage - +dec)}
      />
    </div>
  );
}
