import React from "react";
import Cards from "./Cards.js";
import "./App.css";

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState(true);
  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
