import { FETCH_POSTS, SET_COMMENTS, SET_POSTS } from "../Action/posts";

const initialState = {
  posts: [],
  comments: [],
  myPosts: [],
  myComments: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.posts };
    case SET_POSTS:
      return { ...state, posts: action.posts, myPosts: action.myPosts };
    case SET_COMMENTS:
      return { ...state, comments: action.comments };
    default:
      return state;
  }
};
