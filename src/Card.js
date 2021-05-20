import React, { useState } from "react";
import style from "./css/Cards.module.css";
import { updateCardName } from "./TrelloApiClient";

const Card = ({ id, name, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardName, setCardName] = useState(name);

  const handleEditOnClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    await updateCardName(id, cardName);
    setIsEditing(false);
    onChange(id, cardName);
  };

  return (
    <li className={style.cardDefault}>
      <form onSubmit={handleOnSubmit}>
        {isEditing ? (
          <>
            {" "}
            <input
              type="text"
              value={cardName}
              onChange={(event) => setCardName(event.target.value)}
            />{" "}
            <button type="submit">Save</button>{" "}
          </>
        ) : (
          <>
            {name}
            <button type="button" key={id} onClick={handleEditOnClick}>
              Edit
            </button>
          </>
        )}
      </form>
    </li>
  );
};

export default Card;
