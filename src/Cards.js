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

  // const handleCheckboxChange = (id) => {
  //   setIsLoading(true);
  //   console.log({ isLoading });
  //   setTasks(
  //     tasks.map((task) => {
  //       if (task.id === id) {
  //         task.isCompleted = !task.isCompleted;
  //         updateDueComplete(task);
  //       }
  //       setIsLoading(false);
  //       console.log({ isLoading });
  //       return task;
  //     })
  //   );
  // };

  const handleEditOnClick = (id) => {
    if (editable) {
      setEditable(false);
    } else {
      setEditable(true);
      return <input key={id}>hello</input>;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className={style.card.ul}>
        {tasks.map(({ name, id, isCompleted }) => (
          <li key={id} className={style.cardDefault}>
            {name}
            {
              <button key={id} onClick={() => handleEditOnClick(id)}>
                {editable ? "Save" : "Edit"}
              </button>
            }
          </li>
        ))}
      </ul>
    </form>
  );
};

/* <input
            type="checkbox"
            onChange={() => handleCheckboxChange(id)}
            checked={isCompleted}
            disabled={isLoading}
            
          /> */

export default Cards;
