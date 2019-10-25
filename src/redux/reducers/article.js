import {
  ARTICLE_REQUEST,
  ARTICLE_SUCCESS,
  ARTICLE_ERROR
} from "../actions/article";

const initialState = {
  articles: [
    {
      id: 1000,
      title: "Hello world",
      date: 1568620630, // UNIX timestamp
      text: `<p>Hello World, it's initial article</p>`
    }
  ],
  loading: false,
  error: false
};

export const articleReducer = (store = initialState, action) => {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return {
        ...store,
        loading: true,
        error: false
      };
    case ARTICLE_SUCCESS:
      return {
        ...store,
        loading: false,
        articles: action.payload
      };
    case ARTICLE_ERROR:
      return {
        ...store,
        loading: false,
        error: action.payload
      };
    default:
      return store;
  }
};
