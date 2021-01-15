import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Register from "./Screens/Register";

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./Store/Reducer/auth";
import postReducer from "./Store/Reducer/posts";
import { isAuthenticated } from "./utility";
import Dashboard from "./Screens/Dashboard";
import PostsPage from "./Screens/PostsPage";
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(ReduxThunk))
// );
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function Router() {
  const [IsAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const verifyAuth = () => {
      setIsAuth(!!isAuthenticated());
    };
    verifyAuth();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home isAuth={IsAuth} />} />
          <Route
            path="/register"
            exact
            render={() => (!IsAuth ? <Register /> : <Redirect to="/" />)}
          />
          <Route
            path="/login"
            exact
            render={() => (!IsAuth ? <Login /> : <Redirect to="/" />)}
          />
          <Route
            path="/dashboard"
            exact
            render={() => (IsAuth ? <Dashboard /> : <Redirect to="/login" />)}
          />
          <Route
            path="/post"
            exact
            render={() => (IsAuth ? <PostsPage /> : <Redirect to="/login" />)}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
