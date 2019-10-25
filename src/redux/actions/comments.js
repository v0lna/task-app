import { commentsAPI } from "../../utils";

export const COMMENTS_REQUEST = "COMMENTS_REQUEST";
export const COMMENTS_SUCCESS = "COMMENTS_SUCCESS";
export const COMMENTS_ERROR = "COMMENTS_ERROR";

export default function getComments() {
  return async (dispatch) => {
    try {
      dispatch({ type: COMMENTS_REQUEST });

      const res = await commentsAPI.get();
      // console.log(res);
      dispatch({ type: COMMENTS_SUCCESS, payload: res });
    } catch (err) {
      dispatch({ type: COMMENTS_ERROR, payload: err });
    }
  };
}
