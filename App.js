import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const data = axios.get("https://jsonplaceholder.typicode.com/todos");
      console.log(data);
    } catch (error) {
      console.log({ error: error.message });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
