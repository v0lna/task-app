import { AppStore } from './../configureStore';
import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_ERROR,
  LIKE_INC,
  AppActions,
} from './../../types/actions';
import { commentsAPI } from '../../utils';
import { Comment } from 'types/Comment';
import { Dispatch } from 'redux';

export const startRequest = (): AppActions => ({
  type: COMMENTS_REQUEST,
});

export const successRequest = (payload: Comment[]): AppActions => ({
  type: COMMENTS_SUCCESS,
  payload,
});

export const errorRequest = (payload: Error): AppActions => ({
  type: COMMENTS_ERROR,
  payload,
});

export const likeIncrease = (payload: number): AppActions => ({
  type: LIKE_INC,
  payload,
});

export function getComments() {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {
    try {
      dispatch(startRequest());

      const res = await commentsAPI.get();
      // console.log(res);
      dispatch(successRequest(res));
    } catch (err) {
      dispatch(errorRequest(err));
    }
  };
}

export function addLike(id: number) {
  return (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {
    dispatch(likeIncrease(id));
  };
}
