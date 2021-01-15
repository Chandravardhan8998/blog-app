import { isAuthenticated } from "../../utility";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const FETCH_USER = "FETCH_USER";

const saveToLocal = (email, id) => {
  localStorage.setItem("email", email);
  localStorage.setItem("userId", id);
};

export const registerUser = ({ email }) => {
  return (dispatch) => {
    const id = Math.floor(Math.random() * 10) + 1;
    saveToLocal(email, id);
    console.log(email, id);
    window.location.href = "/dashboard";
    return dispatch({ type: REGISTER, email, userId: id });
  };
};

export const logInUser = ({ email }) => {
  return (dispatch) => {
    const id = Math.floor(Math.random() * 10) + 1;
    saveToLocal(email, id);
    window.location.href = "/dashboard";
    return dispatch({ type: REGISTER, email, userId: id });
  };
};
export const fetchUser = () => {
  return (dispatch) => {
    if (!!isAuthenticated()) {
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
      dispatch({ type: FETCH_USER, userId, email });
      return;
    } else {
      return dispatch({ type: FETCH_USER, userId: null, email: null });
    }
  };
};
