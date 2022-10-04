import React, { useState } from "react";
import "./index.css";
import Edit from "./components/Edit";
import List from "./components/List";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List ListData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
