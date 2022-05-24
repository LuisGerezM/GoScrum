import { useState } from "react";
import "./Card.styles.css";

const Card = ({
  // editCardStatus,
  // deleteCard,
  actionsCard,
  data: {
    title,
    createdAt,
    user: { userName },
    description,
    status,
    importance,
  },
  data, // para conservar data sin desestructurar
}) => {
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  const nameUser = localStorage.getItem("userName");

  // conver time -> local
  const dateTime = `${new Date(createdAt).toLocaleString()} hs.`;

  // limit description
  const limitString = (str) => {
    if (str.length > 100)
      return { string: str.slice(0, 97).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  return (
    <div className="card">
      {/* Si el onClick sería onClick={deleteCard(_id, title)} -> da este error: Cannot update a component (`Tasks`) while rendering a different component (`Card`). To locate the bad setState() call inside `Card`, follow the stack trace as described in  */}
      {nameUser === userName && (
        <div
          className="close"
          // onClick={() => deleteCard(_id, title)}
          onClick={() => actionsCard(data, "eliminar")}
        >
          X
        </div>
      )}

      <div className="title">{title}</div>
      <div className="created">{dateTime}</div>
      <div className="created">{userName}</div>
      <button
        className={status.toLowerCase()}
        type="button"
        // onClick={() => editCardStatus(data)}
        onClick={() => actionsCard(data, "cambiar")}
      >
        {status.toLowerCase()}
      </button>
      <button className={importance.toLowerCase()} type="button">
        {importance.toLowerCase()}
      </button>

      <p>
        {showMoreDescription
          ? description
          : limitString(`${description}`).string}{" "}
      </p>

      {limitString(`${description}`).addButton && (
        <button
          type="button"
          onClick={() => setShowMoreDescription((prevValue) => !prevValue)}
        >
          {showMoreDescription ? "Ver menos" : "Ver más"}
        </button>
      )}
    </div>
  );
};

export default Card;
