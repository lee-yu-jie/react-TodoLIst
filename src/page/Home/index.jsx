import React, { useState, useEffect} from "react";
import "./index.css";
import { API_DATA } from '../../global/constants';
import Edit from "./components/Edit";
import List from "./components/List";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_DATA)
    .then((res)=> res.json())
    .then((data) => {
      setData(data.reverse());
    })
  },[])

  return (
    <div className="app">
      <Edit add={setData} />
      <List ListData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
