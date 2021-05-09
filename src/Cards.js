import React, { useEffect, useState } from "react";
import { getTasks, updateDueComplete } from "./TrelloApiClient";
import style from "./css/Cards.module.css";

const Cards = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editable, setEditable] = useState(false);

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

  const handleEditOnClick = () => {
    setEditable(true);
  };

  return (
    <ul className={style.card.ul}>
      {tasks.map(({ name, id, isCompleted }) => (
        <li key={id} className={style.cardDefault}>
          {name}
          {
            <button hidden={editable} onClick={handleEditOnClick}>
              Edit
            </button>
          }
          {<button hidden={!editable}>Save</button>}
        </li>
      ))}
    </ul>
  );
};

/* <input
            type="checkbox"
            onChange={() => handleCheckboxChange(id)}
            checked={isCompleted}
            disabled={isLoading}
            
          /> */

export default Cards;
