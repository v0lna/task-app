import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR
} from "../actions/comments";

const initialState = {
  comments: [],
  loading: false,
  error: false
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
    default:
      return store;
  }
};
