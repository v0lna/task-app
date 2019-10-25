import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR,
  LIKE_INC
} from "../actions/comments";
import _clone from "lodash.clonedeep";

const initialState = {
  comments: [],
  loading: false,
  error: false
};

const getObject = (arr, targetId) => {
  const result = _clone(arr);

  function addLike(array) {
    array.forEach((element) => {
      if (element.id === targetId) {
        const currentLikes =
          typeof element.likes === "number" ? element.likes : 0;
        element.likes = currentLikes + 1;
      }
      if (element.replies && element.replies.length > 0) {
        addLike(element.replies);
      }
    });
  }
  addLike(result);
  return result;
};
export const commentsReducer = (store = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...store,
        loading: true,
        error: false
      };
    case COMMENTS_SUCCESS:
      return {
        ...store,
        loading: false,
        comments: action.payload
      };
    case COMMENTS_ERROR:
      return {
        ...store,
        loading: false,
        error: action.payload
      };
    case LIKE_INC:
      return {
        ...store,
        comments: getObject(store.comments, action.payload)
      };
    default:
      return store;
  }
};
