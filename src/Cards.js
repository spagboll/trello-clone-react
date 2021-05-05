import React, { useEffect, useState } from "react";
import { getTasks, updateDueComplete } from "./TrelloApiClient";
import style from "./css/Cards.css";

const Cards = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const doGetTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    doGetTasks();
  }, []);

  const handleCheckboxChange = (id) => {
    setIsLoading(true);
    console.log({ isLoading });
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
          updateDueComplete(task);
        }
        setIsLoading(false);
        console.log({ isLoading });
        return task;
      })
    );
  };

  return (
    <ul>
      {tasks.map(({ name, id, isCompleted }) => (
        <li key={id} className={style.cardDefault}>
          {name}{" "}
          <input
            type="checkbox"
            onChange={() => handleCheckboxChange(id)}
            checked={isCompleted}
            disabled={isLoading}
          />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
