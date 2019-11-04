import { Article } from './Article';
import { Comment } from './Comment';

export const ARTICLE_REQUEST = 'ARTICLE_REQUEST';
export const ARTICLE_SUCCESS = 'ARTICLE_SUCCESS';
export const ARTICLE_ERROR = 'ARTICLE_ERROR';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS';
export const COMMENTS_ERROR = 'COMMENTS_ERROR';
export const LIKE_INC = 'LIKE_INC';

export interface ArticleRequestAction {
  type: typeof ARTICLE_REQUEST;
}

export interface ArticleSuccessAction {
  type: typeof ARTICLE_SUCCESS;
  payload: Article[];
}

export interface ArticleErrorAction {
  type: typeof ARTICLE_ERROR;
  payload: Error;
}

export interface CommentsRequestAction {
  type: typeof COMMENTS_REQUEST;
}

export interface CommentsSuccessAction {
  type: typeof COMMENTS_SUCCESS;
  payload: Comment[];
}

export interface CommentsErrorAction {
  type: typeof COMMENTS_ERROR;
  payload: Error;
}
export interface CommentsAddLike {
  type: typeof LIKE_INC;
  payload: number;
}

export type ArticleActionTypes = ArticleRequestAction | ArticleSuccessAction | ArticleErrorAction;
export type CommentActionTypes =
  | CommentsRequestAction
  | CommentsSuccessAction
  | CommentsErrorAction
  | CommentsAddLike;

export type AppActions = ArticleActionTypes | CommentActionTypes;
