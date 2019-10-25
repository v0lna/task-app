import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleContainer from "./containers/ArticleContainer";
import CommentsContainer from "./containers/CommentsContainer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
      <ArticleContainer />
      <CommentsContainer />
      {/* <Article /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
