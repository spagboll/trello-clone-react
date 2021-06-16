import React, { useState } from "react";
import { updateCardName } from "./TrelloApiClient";

const Card = ({ id, name, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardName, setCardName] = useState(name);

  const handleCancelOnClick = () => {
    setIsEditing(false);
  };

  const handleEditOnClick = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (name !== cardName) {
      console.log("hit validation");
      await updateCardName(id, cardName);
    }
    setIsEditing(false);
    onChange(id, cardName);
  };

  return (
    <li>
      <form onSubmit={handleOnSubmit}>
        {isEditing ? (
          <>
            {" "}
            <div class="card shadow-lg">
              <div class="card-body">
                <input
                  class="input input-bordered input-sm"
                  type="text"
                  name="cardNameInput"
                  value={cardName}
                  onChange={(event) => setCardName(event.target.value)}
                />{" "}
                <button class="btn btn-success btn-sm" type="submit">
                  Save
                </button>{" "}
                <button
                  class="btn btn-warning btn-sm"
                  type="button"
                  onClick={handleCancelOnClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div class="card shadow-lg">
              <div class="card-body">
                {" "}
                <div class="card-title"> {name}</div>
                <button
                  class="btn btn-primary btn-xs"
                  type="button"
                  key={id}
                  onClick={handleEditOnClick}
                >
                  Edit
                </button>
              </div>
            </div>
          </>
        )}
      </form>
    </li>
  );
};

export default Card;
