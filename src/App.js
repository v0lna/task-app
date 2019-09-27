import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Article from "./components/Article/Article";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
      <Article />
      {/* </header> */}
    </div>
  );
}

export default App;
