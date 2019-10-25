import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ArticleContainer from "./containers/ArticleContainer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
      <ArticleContainer />
      {/* <Article /> */}
      {/* </header> */}
    </div>
  );
}

export default App;
