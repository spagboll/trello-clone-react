import React, { useState, useEffect } from "react";
import  Cards from "./Cards.js";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // effect
    // call the api
    // store tasks in state
    // set loading false
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <Cards setLoading={setLoading}/>
      {/* <ul>
        {tasks.map(({ name, id, dueComplete }) => (
          <li key={id}>
            {name} <input type="checkbox" checked={dueComplete} />{" "}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
