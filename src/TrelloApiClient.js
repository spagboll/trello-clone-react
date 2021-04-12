import { accessKey, token } from "./trello-creds.js";

const endpoint = "";
const boardUrl = `https://api.trello.com/1/boards/xnylmuKe/cards?key=${accessKey}&token=${token}`;

export const getTasks = () => {
  fetch(boardUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);

      const filteredItems = json.map(({ name, id, dueComplete }) => {
        return { name, id, isCompleted: dueComplete };
      });

      console.log({ filteredItems });
      setTasks(filteredItems);
      setLoading(false);
    });
};
