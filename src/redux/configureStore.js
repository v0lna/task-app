import { applyMiddleware, createStore } from "redux";
import { articleReducer } from "./reducers/article";
import thunk from "redux-thunk";

export const store = createStore(articleReducer, applyMiddleware(thunk));
