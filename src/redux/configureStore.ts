import { applyMiddleware, createStore, combineReducers } from 'redux';
import { articleReducer } from './reducers/article';
import { commentsReducer } from './reducers/comments';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppActions } from 'types/actions';

const reducers = combineReducers({
  articles: articleReducer,
  comments: commentsReducer,
});

export type AppStore = ReturnType<typeof reducers>;

export const store = createStore(
  reducers,
  applyMiddleware(thunk as ThunkMiddleware<AppStore, AppActions>),
);
