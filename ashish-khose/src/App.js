import "./styles.css";
import Card from "./Card";
import Header from "./Header";
import React, { useState, useEffect } from "react";

let App = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:7500", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  let searchHandler = (searchHandlerData) => {
    console.log("input data ", searchHandlerData);
    fetch(`http://localhost:7500/ads/${searchHandlerData}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <>
      <Header searchPropData={searchHandler} />
      <div className="container">
        <Card proData={data} />
      </div>
    </>
  );
};
export default App;
