import { accessKey, token } from "./trello-creds.js";

const baseUrl = "https://api.trello.com/1";
const credentials = `?key=${accessKey}&token=${token}`;

export const getTasks = () => {
  const boardUrl = `${baseUrl}/boards/xnylmuKe/cards${credentials}`;

  let filteredItems = [];

  fetch(boardUrl)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      filteredItems = json.map(({ name, id, dueComplete }) => {
        return { name, id, dueComplete };
      });

      console.log({ filteredItems });
    });

  return filteredItems;
};

export default getTasks;
