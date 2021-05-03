import React, { useEffect, useState } from "react";
import { getTasks, updateDueComplete } from "./TrelloApiClient";

const Cards = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const doGetTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    doGetTasks();
  }, []);

  const handleCheckboxChange = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
          updateDueComplete(task);
        }
        return task;
      })
    );
  };

  return (
    <ul>
      {tasks.map(({ name, id, isCompleted }) => (
        <li key={id}>
          {name}{" "}
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(id)}
            checked={isCompleted}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
