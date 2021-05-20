import React, { useEffect, useState } from "react";
import { getCards, updateDueComplete } from "./TrelloApiClient";
import Card from "./Card";
import style from "./css/Cards.module.css";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editable, setEditable] = useState(false);

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
  //   );
  // };

  const handleEditOnClick = (id) => {
    if (editable) {
      setEditable(false);
    } else {
      setEditable(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const displayButtonText = (buttonId) => {};

  return (
    <form onSubmit={handleSubmit}>
      <ul className={style.card.ul}>
        {cards.map(({ name, id, isCompleted }) => (
          <Card name={name} id={id} editable={editable} />
          // <li key={id} className={style.cardDefault}>
          //   {name}
          //   {
          //     <button key={id} onClick={() => handleEditOnClick(id)}>
          //       {editable ? "Save" : "Edit"}
          //     </button>
          //   }
          // </li>
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
