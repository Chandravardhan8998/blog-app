export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL";

export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const FETCH_COMMENTS_START = "FETCH_COMMENTS_START";
export const FETCH_COMMENTS_FAIL = "FETCH_COMMENTS_FAIL";

export const fetchPosts = () => {
  return async (dispatch, state) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let post = await res.json();
    return dispatch({
      type: FETCH_POSTS,
      posts: post,
    });
  };
};

export const fetchComment = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let comments = await res.json();
    return dispatch({
      type: FETCH_COMMENTS,
      comments,
    });
  };
};
