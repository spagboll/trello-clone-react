import React, { useState, useEffect } from "react";
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
      <ul>
        {tasks.map(({ name, id, isCompleted }) => (
          <li key={id}>
            {name} <input type="checkbox" checked={isCompleted} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
