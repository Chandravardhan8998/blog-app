import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Form from "../Components/Forms/Form";
import TopNavbar from "../Components/TopNavbar";
import { registerUser } from "../Store/Action/auth";

export default function Register() {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Fragment>
      <TopNavbar />
      <Form
        title="Register"
        onSubmit={(val) => {
          dispatch(registerUser(val));
        }}
      />
    </Fragment>
  );
}
