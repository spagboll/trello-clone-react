import React, { useEffect, useState } from "react";

const Card = (props) => {
  return (
    <div>
      <li key={id} className={style.cardDefault}>
        {name}
        {
          <button key={id} onClick={() => handleEditOnClick(id)}>
            {editable ? "Save" : "Edit"}
          </button>
        }
      </li>
    </div>
  );
};
