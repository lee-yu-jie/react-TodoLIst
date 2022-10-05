import React, { useState, useEffect, useRef } from "react";
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

  // useEffect(() => {
  //   if(!submittingStatus.current){
  //     return
  //   }
  //   fetch(API_DATA, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data[0])
  //   }).then(() => { submittingStatus.current = false})
  // },[data])

  return (
    <div className="app">
      <Edit add={setData} />
      <List ListData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
