import { getTasks } from "./TrelloApiClient";

const Cards = () => {
  let tasks = getTasks();

  return (
    <ul>
      {tasks.map(({ dueComplete, id, name }) => (
        <li key={id}>
          {name} <input type="checkbox" checked={dueComplete} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default Cards;
