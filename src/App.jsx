import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import CardContainer from "./components/CardContainer/CardContainer";

function App() {
  const API = "https://api.punkapi.com/v2/beers";

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // useState{() => {}, []} === componentDidmount -> component loaded initiailly
  // useState{() => {}, [state]} === componentDidupdate
  // useState{() => {}, [] return ...} === componentDidunmount

  // const [loaded, setIsLoading] = useState(false);

  const getData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  getData();
  // const fetchData = async () => {
  //   return await getData;
  // };

  return (
    <div className="App">
      {/* <NavBar /> */}
      <CardContainer data={data} />
    </div>
  );
}

export default App;
