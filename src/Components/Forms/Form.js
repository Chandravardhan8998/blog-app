import React, { useState } from "react";
import FormGroup from "./FormGroup";

export default function Form({ onSubmit, title, userType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!!email && !!password) {
      onSubmit({ email, password });
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <form
        className="shadow p-4 bg-dark text-light rounded"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <h3 className="py-3" style={{ textAlign: "center" }}>
          {title}
        </h3>
        <FormGroup title="Email">
          <input
            id="Email"
            type="email"
            minLength={8}
            maxLength={32}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            required
            className="form-control"
          />
        </FormGroup>

        <FormGroup title="Password">
          <input
            className="form-control"
            id="Password"
            required
            min={6}
            max={32}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup>
          <input
            className="btn btn-primary p-2 my-2 btn-block form-control"
            type="submit"
            value="Submit"
          />
        </FormGroup>
      </form>
    </div>
  );
}
