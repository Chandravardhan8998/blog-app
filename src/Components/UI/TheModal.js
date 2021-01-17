import React, { useEffect, useState } from "react";
import FormGroupe from "../Forms/FormGroup";
import Modal from "react-bootstrap/Modal";
import { getRandomBetween } from "../../utility";
import "bootstrap/dist/css/bootstrap.min.css";
export default function TheModal({
  ShowHide,
  onCloseModal,
  onSubmit,
  title = "",
  userId,
  body = "",
}) {
  const [PostTitle, setPostTitle] = useState("");
  const [PostBody, setPostBody] = useState("");
  useEffect(() => {
    if (!!title && !!body) {
      setPostTitle(title);
      setPostBody(body);
    }
  }, [title, body]);
  return (
    <Modal show={ShowHide} onHide={onCloseModal}>
      <Modal.Header>Make A Post</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={(e) => {
            onSubmit(e, {
              title: PostTitle,
              body: PostBody,
              id: getRandomBetween(500, 1000),
              userId: userId,
            });
            setPostBody("");
            setPostTitle("");
          }}
        >
          <FormGroupe title="Title">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              value={PostTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              id="Title"
            />
          </FormGroupe>
          <FormGroupe title="Body">
            <input
              required
              id="Body"
              className="form-control"
              type="text"
              placeholder="Body"
              value={PostBody}
              onChange={(e) => setPostBody(e.target.value)}
            />
          </FormGroupe>
          <FormGroupe>
            <input
              required
              className="btn btn-success btn-block"
              type="submit"
              value="Post"
            />
          </FormGroupe>
        </form>
      </Modal.Body>
    </Modal>
  );
}
