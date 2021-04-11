const boardUrl =
  "https://api.trello.com/1/boards/xnylmuKe/cards?key=151437e929004018d0e7d61f28c222aa&token=3a9480e5ef9775d10884da2b99b2c17399c0269447864107a92d2804862afa57";

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
