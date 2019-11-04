import React, {SyntheticEvent} from "react";
import styled from 'styled-components';
import { P } from "../Article/Article"
import { Comment } from "types/Comment";
import { CommentsInitState } from "redux/reducers/comments";
 

interface Props {
  state: CommentsInitState,
  addLike(id: number): void
}

type DOCprops = {
  width: string,
  marginTop: string;
}

const DivOneComment = styled.div<DOCprops>`
  box-shadow: 1px 2px 12px -2px rgb(119, 119, 119);
  width: 55vw;
  width: ${props => props.width };
  margin-top: ${props => props.marginTop}
`

const Span = styled.span`
  cursor: pointer;
`
const DivCommentsContainer = styled.div`
  margin-bottom: 40px;
`
const DivContainer = styled.div`
  margin: 10px auto;
  width: 724px;
`
const DivGridContainer = styled.div`
  display: grid;
  gap: 5px;
  justify-items: end;
  `
export const Comments: React.FC<Props> = (props) => {

  const { state, addLike } = props;

  function getOneComment(arr: Comment[]) {
    const result: JSX.Element[] = [];
    let replCount: number = 0;
    function mainWorker(array: Comment[]) {
      array.forEach((element, index, data) => {
        result.push(wrapComment(element, replCount));
        if (element.replies && element.replies.length > 0) {
          ++replCount;
          mainWorker(element.replies);
        } else if (index === data.length - 1) replCount = 0;
      });
    }
    mainWorker(arr);
    return result;
  }
  function wrapComment(obj: Comment, wrapLvl: number) {
    let widthSize = `${53 - wrapLvl * 5}vw`;
    let marginTop = wrapLvl > 0 ? "5px" : "10px";

    const repl =
      obj.replies && obj.replies.length > 0 ? obj.replies.length : false;
    return (
        <DivOneComment key={obj.id} width={widthSize} marginTop={marginTop}>
        <p>{obj.name}</p>
        <div dangerouslySetInnerHTML={{ __html: obj.commentText }} />
        <Span
          role="img"
          aria-label="like"
          id={`${obj.id}`}
        >
          👍
        </Span>{" "}
        <span> {obj.likes}</span>
        {repl ? <span> ↪ {repl}</span> : null}
        </DivOneComment>
    );
  }

  const likeHandle = (e: SyntheticEvent): void => {
    const el: any = e.target;

    if (el.innerHTML.indexOf("👍") !== -1) addLike(+el.id);
  };
  return (
      <DivCommentsContainer>
      <P>Comments</P>
      {state.error ? (
        <P> state.error</P>
      ) : state.loading ? (
        <P> Loading...</P>
      ) : state.comments && state.comments.length > 0 ? (
        <DivContainer>
          <DivGridContainer onClick={(e) => likeHandle(e)}>
            {getOneComment(state.comments)}
          </DivGridContainer>
        </DivContainer>
      ) : null}
      </DivCommentsContainer>
  );
}
