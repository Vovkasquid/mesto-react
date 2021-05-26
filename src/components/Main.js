import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
  //Объявляем переменные состояния
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  //При монтировании компонента вызовется этот хук
  //В нём произведём запрос на сервер, чтобы получить новые данные
  React.useEffect(() => {
    Promise.all([
      //Передаём Массив промисов, которые необходимо выполнить
      //Ответ будет в массиве данных, по порядку написания промисов
      //Но не по порядку их выполнения
      api.getUserInformation(),
      api.getInitialCards()
    ])
      .then(([userData, cardsList])=>{
        //Попадаем сюда, только когда оба промиса будут выполнены
        //Устанавливаем полученные данные пользователя
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        //Передаём карточки в стейт cards
        setCards(cardsList);
      })
      .catch((err)=>{
        console.log(err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}} >
            <div className="profile__overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">{userName}</h1>
              <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button aria-label="Добавить новое фото" type="button" className="profile__new-photo-button" onClick={onAddPlace}></button>
      </section>

      <section className="content-gallery">
        <ul className="content-gallery__cards">
          {cards.map((card) => {
            return <Card card={card} key={card._id}/>
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
