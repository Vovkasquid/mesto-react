import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  //Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);
  //Забираем из контекста объект данных пользователя
  const [userInformation] = currentUser;
  //Объявляем переменные состояния
  const [cards, setCards] = React.useState([]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userInformation.avatar})`}} >
            <div className="profile__overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userInformation.name}</h1>
              <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userInformation.about}</p>
          </div>
        </div>
        <button aria-label="Добавить новое фото" type="button" className="profile__new-photo-button" onClick={onAddPlace}></button>
      </section>

      <section className="content-gallery">
        <ul className="content-gallery__cards">
          {cards.map((card) => {
            return (
            <Card card={card} key={card._id} onCardClick={onCardClick}/>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
