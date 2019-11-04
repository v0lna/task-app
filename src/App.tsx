import React from 'react';
import Header from './components/Header/Header';
import ArticleContainer from './containers/ArticleContainer';
import CommentsContainer from './containers/CommentsContainer';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  width: 75vw;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'h'
    'a';
  grid-template-rows: 1fr 6fr;
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

const App = (): JSX.Element => {
  return (
    <Div>
      <Header />
      <ArticleContainer />
      <CommentsContainer />
    </Div>
  );
};

export default App;
