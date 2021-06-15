import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick}) {
  //Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);
  //Забираем из контекста объект данных пользователя
  const [, cards] = currentUser;
  
  return (
    <section className="content-gallery">
      <ul className="content-gallery__cards">
        {cards && cards.map((card, key) => {
          return (
            <li className="card" key={key}>
              <img src={card.link} alt={card.name} className="card__photo" />
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
        })}
      </ul>
    </section>
  );
}

export default Card;
