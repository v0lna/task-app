import { applyMiddleware, createStore, combineReducers } from "redux";
import { articleReducer } from "./reducers/article";
import { commentsReducer } from "./reducers/comments";
import thunk from "redux-thunk";

const reducers = combineReducers({
  articles: articleReducer,
  comments: commentsReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
