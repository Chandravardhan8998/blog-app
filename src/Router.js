import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import { isAuthenticated } from "./utility";
import Dashboard from "./Screens/Dashboard";
import PostsPage from "./Screens/PostsPage";
import { fetchUser } from "./Store/Action/auth";
import { fetchComment, fetchPosts } from "./Store/Action/posts";
import { useDispatch } from "react-redux";
export default function Router() {
  const dispatch = useDispatch();
  dispatch(fetchUser());
  dispatch(fetchPosts());
  dispatch(fetchComment());
  const [IsAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyAuth = () => {
      setIsAuth(!!isAuthenticated());
    };
    verifyAuth();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Home isAuth={IsAuth} />} />

        <Route
          path="/register"
          render={() =>
            !IsAuth ? (
              <Register />
            ) : (
              <h1>
                <Link to="/dashboard"> Access Denied </Link>
              </h1>
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            !IsAuth ? (
              <Login />
            ) : (
              <h1>
                <Link to="/dashboard"> Access Denied </Link>
              </h1>
            )
          }
        />
        <Route
          path="/dashboard"
          render={() =>
            IsAuth ? (
              <Dashboard />
            ) : (
              <h1>
                <Link to="/login"> Access Denied Login First </Link>
              </h1>
            )
          }
        />
        <Route
          path="/post"
          render={() =>
            IsAuth ? (
              <PostsPage />
            ) : (
              <h1>
                <Link to="/login"> Access Denied Login First </Link>
              </h1>
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}
