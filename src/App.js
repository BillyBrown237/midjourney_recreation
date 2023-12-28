import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Feed />
    </div>
  );
}

export default App;
