import React, { useState, useEffect } from "react";
import "./index.css";
import Edit from "./components/Edit";
import List from "./components/List";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => { 
    alert("新增成功")
  },[data])

  return (
    <div className="app">
      <Edit add={setData} />
      <List ListData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
