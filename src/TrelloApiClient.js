import { accessKey, token } from "./trello-creds.js";

const baseUrl = "https://api.trello.com/1";
const credentials = `?key=${accessKey}&token=${token}`;
const boardUrl = `${baseUrl}/boards/xnylmuKe/cards`;

export const getCards = async () => {
  let filteredItems = [];

  await fetch(`${boardUrl}${credentials}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      filteredItems = json.map(({ name, id, dueComplete: isCompleted }) => {
        return { name, id, isCompleted };
      });

      console.log({ filteredItems });
    });

  return filteredItems;
};

export const updateDueComplete = async (task) => {
  await fetch(
    `${baseUrl}/cards/${task.id}${credentials}&dueComplete=${task.isCompleted}`,
    { method: "PUT" }
  ).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      console.log({ response });
    }
  });
};

export const updateCardName = async (id, newName) => {
  await fetch(`${baseUrl}/cards/${id}${credentials}&name=${newName}`, {
    method: "PUT",
  }).then((response) => {
    if (response.status === 200) {
      console.log("Updated card name");
      return response.json();
    } else {
      console.log({ response });
    }
  });
};
