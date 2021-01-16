import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router";
import authReducer from "./Store/Reducer/auth";
import postReducer from "./Store/Reducer/posts";

import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from "redux-thunk";
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
});
// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

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
