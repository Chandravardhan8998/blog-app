import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Form from "../Components/Forms/Form";
import TopNavbar from "../Components/TopNavbar";
import { registerUser } from "../Store/Action/auth";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <TopNavbar />
      <Form
        title="Login"
        onSubmit={(val) => {
          dispatch(registerUser(val));
          <Redirect to="/dashboard" />;
        }}
      />
    </div>
  );
}
