import { ArticleActionTypes } from './../../types/actions';
import { Article } from 'types/Article';
import { ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_ERROR } from '../../types/actions';

// export interface initialStateArticle {
// articles: {id: number, title: string, data: number, text: }[]
// }

export interface ArticleInitState {
  articles: Article[];
  loading: boolean;
  error: boolean | Error;
}

const initialState: ArticleInitState = {
  articles: [
    {
      id: 1000,
      title: 'Hello world',
      date: 1568620630, // UNIX timestamp
      text: `<p>Hello World, it's initial article</p>`,
    },
  ],
  loading: false,
  error: false,
};

export const articleReducer = (
  store = initialState,
  action: ArticleActionTypes,
): ArticleInitState => {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case ARTICLE_SUCCESS:
      return {
        ...store,
        loading: false,
        articles: action.payload,
      };
    case ARTICLE_ERROR:
      return {
        ...store,
        loading: false,
        error: action.payload,
      };
    default:
      return store;
  }
};
