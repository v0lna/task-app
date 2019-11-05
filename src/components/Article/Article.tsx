import React from 'react';
import { ArticleInitState } from '../../redux/reducers/article';
import { ContentWrapper } from '../style/ContentWrapper';
import InfoText from 'components/style/InfoText';
import styled from 'styled-components';

interface ArticleProps {
  state: ArticleInitState;
}

const ArticleWrapper = styled(ContentWrapper)`
  grid-area: a;
`;
const getDate = (unixTime: number): string => {
  // MMMM D YYYY HH:mm:ss - moment generate
  const date = new Date(unixTime * 1000);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() > 9 ? date.getUTCMonth() + 1 : `0${date.getUTCMonth() + 1}`;
  const year = date.getUTCFullYear();

  const hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const mm = date.getUTCMinutes() > 9 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`;
  return `${day}.${month}.${year} ${hh}:${mm}`;
};
export const Article: React.FC<ArticleProps> = (props) => {
  const {
    state: { error, loading, articles },
  } = props;
  return (
    <ArticleWrapper>
      {error ? <InfoText isError={error ? true : false}>Error</InfoText> : null}
      {loading ? (
        <InfoText>Loading...</InfoText>
      ) : articles ? (
        articles.map((item) => {
          return (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <div>{getDate(item.date)}</div>
              <div dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          );
        })
      ) : null}
    </ArticleWrapper>
  );
};
