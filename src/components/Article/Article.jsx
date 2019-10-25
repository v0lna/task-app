import React from "react";
import moment from "moment";
import style from "./style.module.css";
// import { articleAPI, commentsAPI } from "../../utils";

export default function Article({ state }) {
  // articleAPI.get().then((res) => console.log(res));
  return (
    <div className={style.blank}>
      {state.error ? <p>state.error</p> : null}
      {state.loading ? (
        <p className={style.sys}>Loading...</p>
      ) : state.articles ? (
        state.articles.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <div>
                {moment
                  .unix(item.date)
                  .locale("ru")
                  .format("MMMM D YYYY HH:mm:ss")}
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          );
        })
      ) : null}
    </div>
  );
}
