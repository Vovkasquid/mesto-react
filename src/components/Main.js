import React from 'react';
import Card from './Card';
import api from "../utils/api";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  //Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);
  //Инициализируем стейт с карточками
  const [cards, setCards] = React.useState([]);

  //При монтировании компонента вызовется этот хук
  //В нём произведём запрос на сервер, чтобы получить новые данные
  React.useEffect(() => {
      api.getInitialCards()
      .then((cardsList)=>{
        //Передаём карточки в стейт cards
        setCards(cardsList);
      })
      .catch((err)=>{
        console.log(err);
      })
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})`}} >
            <div className="profile__overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button aria-label="Добавить новое фото" type="button" className="profile__new-photo-button" onClick={onAddPlace}></button>
      </section>

      <section className="content-gallery">
        <ul className="content-gallery__cards">
          {cards.map((card) => {
            return (
              <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike}/>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
