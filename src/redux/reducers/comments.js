const COMMENTS_REQUEST = "COMMENTS_REQUEST";
const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";
const COMMENTS_ERROR = "COMMENTS_ERROR";
const initialState = {
  comments: [
    {
      id: 2000,
      commentText:
        "<p>Hello World<strong>FROM INITIAL COMMENTS</strong> ! How are you today?</p>",
      name: "John Random",
      likes: 3,
      replies: [{ id: 55, commentText: "<p>I'm fine</p>", name: "Matt" }]
    }
  ],
  loading: false,
  error: false
};

export const articleReducer = (store, action) => {
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
        articles: action.payload
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
