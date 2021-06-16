import React, { useEffect, useState } from "react";
import { getCards, updateDueComplete } from "./TrelloApiClient";
import Card from "./Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const doGetcards = async () => {
      const cards = await getCards();
      setCards(cards);
    };

    doGetcards();
  }, []);

  // const handleCheckboxChange = (id) => {
  //   setIsLoading(true);
  //   console.log({ isLoading });
  //   setcards(
  //     cards.map((task) => {
  //       if (task.id === id) {
  //         task.isCompleted = !task.isCompleted;
  //         updateDueComplete(task);
  //       }
  //       setIsLoading(false);
  //       console.log({ isLoading });
  //       return task;
  //     })
  //   );}
  // };

  const handleCardChange = (id, name) => {
    setCards((cards) =>
      cards.map((card) => {
        if (card.id === id) {
          card.name = name;
        }
        return card;
      })
    );
  };

  return (
    <ul>
      {cards.map(({ name, id, isCompleted }) => (
        <Card key={id} name={name} id={id} onChange={handleCardChange} />
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
