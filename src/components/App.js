import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  //Джеб-джеб, уход под левую, хук правой (в стойке левши, конечно)
  //Создаём переменные состояния для попапов с помощью хуков
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  //Объявляем константы для пропсов PopupWithForm
  const editProfilePopupChildren = (
    <>
      <input type="text" name="editProfileName" id="name-input" className="edit-form__info-input edit-form__info-input_type_name" placeholder="Имя"  required minLength="2" maxLength="40"/>
      <span className="edit-form__error-text name-input-error"></span>
      <input type="text" name="editProfileDescription" id="description-input" className="edit-form__info-input edit-form__info-input_type_description" placeholder="Описание"  required minLength="2" maxLength="200"/>
      <span className="edit-form__error-text description-input-error"></span>
    </>
  );

  const addPlacePopupChildren = (
    <>
      <input type="text" name="editPlaceName" id="place-input" className="edit-form__info-input edit-form__info-input_type_place" placeholder="Название"  required minLength="2" maxLength="30"/>
      <span className="edit-form__error-text place-input-error"></span>
      <input type="url" name="editLinkPlace" id="url-input" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на картинку"  required/>
      <span className="edit-form__error-text url-input-error"></span>
    </>
  );

  const editAvatarPopupChildren = (
    <>
      <input type="url" name="editLinkAvatar" id="url-input-avatar" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на аватар"  required/>
      <span className="edit-form__error-text url-input-avatar-error"></span>
    </>
  );

  //Колбеки открытия поппов редактирования Аватара, профиля и добавления нового места
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  //Колбек для закрытия попапов
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  //Колбек установки карточки для фул-вью попапа
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  //Возвращаем разметку всей страницы
  return (
    <div className="App">
      <div className="page">
      <Header/>
      <Main onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onCardClick={handleCardClick}/>
      <Footer/>

      <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        {editProfilePopupChildren}
      </PopupWithForm>
      <PopupWithForm name='place' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        {addPlacePopupChildren}
      </PopupWithForm>
      <PopupWithForm name='delete' title='Вы уверены?' onClose={closeAllPopups} buttonText={'Да'}/>
      <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
        {editAvatarPopupChildren}
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </div>
  );
}

export default App;
