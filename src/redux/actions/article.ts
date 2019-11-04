import { AppStore } from './../configureStore';
import { AppActions, ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_ERROR } from './../../types/actions';
import { articleAPI } from '../../utils';
import { Dispatch } from 'redux';
import { Article } from 'types/Article';

export const startRequest = (): AppActions => ({
  type: ARTICLE_REQUEST,
});

export const successRequest = (payload: Article[]): AppActions => ({
  type: ARTICLE_SUCCESS,
  payload,
});

export const errorRequest = (payload: Error): AppActions => ({
  type: ARTICLE_ERROR,
  payload,
});

const getArticles = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppStore) => {
    try {
      dispatch(startRequest());

      const res = await articleAPI.get();
      // console.log(res);
      dispatch(successRequest([res]));
    } catch (err) {
      dispatch(errorRequest(err));
    }
  };
};

export { getArticles };
