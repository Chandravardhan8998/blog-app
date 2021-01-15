import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import authReducer from "./Store/Reducer/auth";
import postReducer from "./Store/Reducer/posts";

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
