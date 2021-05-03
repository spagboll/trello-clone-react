import { getTasks } from "./TrelloApiClient";

const Cards = () => {
  let tasks = getTasks();

  return (
    <ul>
      {tasks.map(({ name, id, dueComplete }) => (
        <li key={id}>
          {name} <input type="checkbox" checked={dueComplete} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
