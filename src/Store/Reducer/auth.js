/* eslint-disable import/no-anonymous-default-export */
import { FETCH_USER, LOGIN, LOGOUT, REGISTER } from "../Action/auth";

const initialState = {
  userId: null,
  email: null,
  isAuth: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        userId: action.userId,
        email: action.email,
        isAuth: !!action.userId,
      };
    case LOGIN:
      return {
        userId: action.userId,
        email: action.email,
        isAuth: !!action.userId,
      };
    case LOGOUT:
      return initialState;
    case FETCH_USER:
      console.log("here in store", action);
      return {
        userId: action.userId,
        email: action.email,
        isAuth: !!action.userId,
      };
    default:
      return state;
  }
};
