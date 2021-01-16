import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../Store/Action/auth";
import { isAuthenticated } from "../utility";

export default function TopNavbar() {
  const dispatch = useDispatch();
  const [IsAuthentic, setIsAuthentic] = useState(false);
  useEffect(() => {
    setIsAuthentic(isAuthenticated());
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-fill shadow">
      <Link to="/" className="navbar-brand">
        <b>Home</b>
      </Link>
      {!IsAuthentic ? (
        <Fragment>
          <NavLink className="navbar-text m-1" to="/register">
            Register
          </NavLink>
          <NavLink className="navbar-text m-1" to="/login">
            Login
          </NavLink>
        </Fragment>
      ) : (
        <Fragment>
          <NavLink className="navbar-text" to="/dashboard">
            Dashboard
          </NavLink>
          <button
            onClick={() => {
              localStorage.clear();
              dispatch(logout());
              window.location.href = "/";
            }}
            className="btn btn-danger mx-3"
            to="/dashboard"
          >
            Logout
          </button>
        </Fragment>
      )}
    </nav>
  );
}
