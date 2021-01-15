import { bindActionCreators } from "redux";
import { FETCH_COMMENTS, FETCH_POSTS } from "../Action/posts";

const initialState = {
  posts: [],
  comments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.posts };
    case FETCH_COMMENTS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};
