import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const fetchBeers = () => {
    return fetch("https://punkapi.com/documentation/v2")
      .then((response) => response.json())
      .then((data) => data.map((beer) => beer));
  };
}

export default App;
