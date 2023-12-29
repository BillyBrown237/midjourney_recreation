import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import SearchBar from "./components/SearchBar";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="main">
        <SearchBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
