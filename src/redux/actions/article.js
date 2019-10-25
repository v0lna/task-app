import { articleAPI } from "../../utils";

export const ARTICLE_REQUEST = "ARTICLE_REQUEST";
export const ARTICLE_SUCCESS = "ARTICLE_SUCCESS";
export const ARTICLE_ERROR = "ARTICLE_ERROR";

export default function getArticles() {
  return async (dispatch) => {
    try {
      dispatch({ type: ARTICLE_REQUEST });

      const res = await articleAPI.get();
      // console.log(res);
      dispatch({ type: ARTICLE_SUCCESS, payload: [res] });
    } catch (err) {
      dispatch({ type: ARTICLE_ERROR, payload: err });
    }
  };
}
