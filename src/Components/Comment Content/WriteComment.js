import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getRandomBetween } from "../../utility";
import FormGroup from "../Forms/FormGroup";
import Comment from "./Comment";
import CommentsHeader from "../Table Content/CommentsHeader";
import Title from "../UI/Title";

export default function WriteComment({ postId, onCommentsSubmit }) {
  const [Comments, setComments] = useState([]);
  const [CurrentName, setCurrentName] = useState("");
  const [CurrentBody, setCurrentBody] = useState("");
  const [Email] = useState(useSelector((state) => state.auth.email));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onCommentsSubmit(Comments);
    setComments([]);
  };
  const oneMoreHandler = (e) => {
    e.preventDefault();
    if (!CurrentBody && !CurrentName) {
      alert("FIll Both Fields");
      return;
    }
    let newComment = {
      postId,
      id: getRandomBetween(501, 1000),
      name: CurrentName,
      body: CurrentBody,
      email: Email,
    };
    let newArray = Comments;
    newArray.push(newComment);
    setComments(newArray);
    setCurrentBody("");
    setCurrentName("");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <form className="shadow p-3 mb-5 mx-3" onSubmit={onSubmitHandler}>
            <Title title="Enter Comments" />
            <FormGroup title="Title">
              <input
                className="form-control"
                id="Title"
                type="text"
                onChange={(e) => setCurrentName(e.target.value)}
                placeholder="Title"
                value={CurrentName}
              />
            </FormGroup>
            <FormGroup title="Body">
              <input
                className="form-control"
                id="Body"
                placeholder="Body"
                type="text"
                onChange={(e) => setCurrentBody(e.target.value)}
                value={CurrentBody}
              />
            </FormGroup>
            <FormGroup>
              <button
                className="btn btn-primary m-1 btn-block"
                onClick={oneMoreHandler}
              >
                One More +
              </button>
              <input
                className="btn btn-success btn-block m-1"
                value="Comment"
                type="submit"
              />
            </FormGroup>
          </form>
        </div>
        <div className="col-7">
          {!!Comments.length && (
            <table>
              <CommentsHeader />
              {Comments.map((c) => (
                <Comment
                  body={c.body}
                  email={c.email}
                  id={c.id}
                  name={c.name}
                  onDelete={() =>
                    setComments(Comments.filter((cm) => cm.id !== c.id))
                  }
                  postId={c.postId}
                />
              ))}
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
