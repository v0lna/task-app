import React from "react";
import style from "./style.module.css";
// import { articleAPI, commentsAPI } from "../../utils";

export default function Comments({ state, addLike }) {
  // articleAPI.get().then((res) => console.log(res));
  function getOneComment(arr) {
    const result = [];
    let replCount = 0;
    function mainWorker(array) {
      array.forEach((element, index, data) => {
        result.push(wrapComment(element, replCount));
        if (element.replies && element.replies.length > 0) {
          ++replCount;
          mainWorker(element.replies, replCount);
        } else if (index === data.length - 1) replCount = 0;
      });
    }
    mainWorker(arr);
    return result;
  }
  function wrapComment(obj, wrapLvl) {
    // console.log(obj);
    let widthSize = `${53 - wrapLvl * 5}vw`;
    let marginTop = `${-5 - wrapLvl * 3}px`;
    // let marginLeft = `${1 + wrapLvl * 3}vw`;
    let newStyle = {
      width: widthSize,
      marginTop
      // marginLeft
    };
    let classStyle = wrapLvl === 0 ? null : newStyle;
    const repl =
      obj.replies && obj.replies.length > 0 ? obj.replies.length : false;
    return (
      <div className={style.blank} style={classStyle} key={obj.id}>
        <p>{obj.name}</p>
        <div dangerouslySetInnerHTML={{ __html: obj.commentText }} />
        <span
          className={style.likeBtn}
          role="img"
          aria-label="like"
          id={obj.id}
        >
          👍
        </span>{" "}
        <span> {obj.likes}</span>
        {repl ? <span> ↪ {repl}</span> : null}
      </div>
    );
  }

  const likeHandle = (e) => {
    // console.log(e.target.innerHTML.indexOf("👍"));

    if (e.target.innerHTML.indexOf("👍") !== -1) addLike(+e.target.id);
    // console.log(addLiked);
  };
  console.log(state);
  return (
    <div className={style.commentsBody}>
      <span className={style.sys}>Comments</span>
      {state.error ? (
        <p className={style.sys}> state.error</p>
      ) : state.loading ? (
        <p className={style.sys}>Loading...</p>
      ) : state.comments && state.comments.length > 0 ? (
        <div className={style.container}>
          <div className={style.gridContainer} onClick={(e) => likeHandle(e)}>
            {getOneComment(state.comments)}
          </div>
        </div>
      ) : null}
    </div>
  );
}
