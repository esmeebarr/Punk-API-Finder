import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import CardContainer from "./components/CardContainer/CardContainer";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const API = "https://api.punkapi.com/v2/beers";

  const [data, setData] = useState([]);
  const [beers, setBeers] = useState([]);
  const [search, updateSearch] = useState([]);

  const handleSearch = (beerName) => {
    if (beerName == undefined || beerName == "") {
      fetch(API)
        .then((response) => response.json())
        .then((data) => setBeers(data));
    } else {
      fetch("https://api.punkapi.com/v2/beers?beer_name=" + beerName)
        .then((response) => response.json())
        .then((data) => setBeers(data));
    }
  };

  const getData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  getData();
  // const fetchData = async () => {
  //   return await getData;
  // };

  useEffect(() => {
    handleSearch("");
  }, []);
  return (
    <div className="App">
      {/* <NavBar /> */}
      <CardContainer data={data} />
      <SearchBar onBlur={handleSearch} />
    </div>
  );
};

export default App;
