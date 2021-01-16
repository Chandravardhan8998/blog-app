export const FETCH_POSTS = "FETCH_POSTS";
export const SET_POSTS = "SET_POSTS";
export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL";

export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const SET_COMMENTS = "SET_COMMENTS";
export const FETCH_COMMENTS_START = "FETCH_COMMENTS_START";
export const FETCH_COMMENTS_FAIL = "FETCH_COMMENTS_FAIL";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const id = localStorage.getItem("userId");
      const resData = await response.json();
      console.log(id);
      console.log(
        resData.filter((post) => {
          return post.userId === id;
        })
      );
      dispatch({
        type: SET_POSTS,
        posts: resData,
        myPosts: resData.filter((post) => {
          return post.userId === id;
        }),
      });
    } catch (error) {
      throw error;
    }
  };
};
export const fetchComment = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      dispatch({
        type: SET_COMMENTS,
        comments: resData,
      });
    } catch (error) {
      throw error;
    }
  };
};
