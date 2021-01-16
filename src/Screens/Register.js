import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import Form from "../Components/Forms/Form";
import TopNavbar from "../Components/TopNavbar";
import { registerUser } from "../Store/Action/auth";

export default function Register() {
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
