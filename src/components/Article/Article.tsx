import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { ArticleInitState } from '../../redux/reducers/article';
export interface ArticleProps {
  state: ArticleInitState;
}
const Div = styled.div`
  grid-area: a;
  box-shadow: 1px 2px 12px -2px rgb(119, 119, 119);
`;
export const P = styled.p`
  color: #26a1f7;
  font-weight: 600;
`;
// let userTestStatus: { id: number, name: string }[] = [
// export default function Article(props): React.FC<Props> {
export const Article: React.FC<ArticleProps> = (props) => {
  const {
    state: { error, loading, articles },
  } = props;
  return (
    <Div>
      {error ? <p>error</p> : null}
      {loading ? (
        <P>Loading...</P>
      ) : articles ? (
        articles.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <div>
                {moment
                  .unix(item.date)
                  .locale('ru')
                  .format('MMMM D YYYY HH:mm:ss')}
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          );
        })
      ) : null}
    </Div>
  );
};
