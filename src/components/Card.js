import React from "react";

function Card({card, onCardClick}) {
  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__photo" onClick={() => onCardClick(card)}/>
      <div className="card__info">
        <h2 className="card__description">{card.name}</h2>
        <div className="card__like-container">
          <button aria-label="Нравится" type="button" className="card__like-button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button aria-label="Удалить место" type="button" className="card__delete-button"></button>
    </li>
  );
}

export default Card;
