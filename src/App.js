import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';
import ImagePopup from './components/ImagePopup';
import React from 'react';

function App() {
  //Объявляем константы для пропсов PopupWithForm
  const editProfilePopupChildren = (
    <>
      <input type="text" name="editProfileName" id="name-input" className="edit-form__info-input edit-form__info-input_type_name" placeholder="Имя" value="" required minLength="2" maxLength="40"/>
      <span className="edit-form__error-text name-input-error"></span>
      <input type="text" name="editProfileDescription" id="description-input" className="edit-form__info-input edit-form__info-input_type_description" placeholder="Описание" value="" required minLength="2" maxLength="200"/>
      <span className="edit-form__error-text description-input-error"></span>
      <button aria-label="Сохранить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_profile">Сохранить</button>
    </>
  );

  const addPlacePopupChildren = (
    <>
      <input type="text" name="editPlaceName" id="place-input" className="edit-form__info-input edit-form__info-input_type_place" placeholder="Название" value="" required minLength="2" maxLength="30"/>
      <span className="edit-form__error-text place-input-error"></span>
      <input type="url" name="editLinkPlace" id="url-input" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на картинку" value="" required/>
      <span className="edit-form__error-text url-input-error"></span>
      <button aria-label="Сохранить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_place">Создать</button>
    </>
  );

  const editAvatarPopupChildren = (
    <>
      <input type="url" name="editLinkAvatar" id="url-input-avatar" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на аватар" value="" required/>
      <span className="edit-form__error-text url-input-avatar-error"></span>
      <button aria-label="Сохранить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_place">Сохранить</button>
    </>
  );

  const deleteCardPopupChildren = (
    <>
      <button aria-label="Удалить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_delete">Да</button>
    </>
  );

  //Колбеки открытия поппов редактирования Аватара, профиля и добавления нового места
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
    //const editAvatarPopup = document.querySelector('.edit-form_type_avatar');
    //editAvatarPopup.classList.add('popup_status_active');
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
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  //Возвращаем разметку всей страницы
  return (
    <div className="App">
      <div className="page">
      <Header/>
      <Main onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}/>
      <Footer/>

      <PopupWithForm name='profile' title='Редактировать профиль' children={editProfilePopupChildren} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name='place' title='Новое место' children={addPlacePopupChildren} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <PopupWithForm name='delete' title='Вы уверены?' children={deleteCardPopupChildren} onClose={closeAllPopups}/>
      <PopupWithForm name='avatar' title='Обновить аватар' children={editAvatarPopupChildren} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <ImagePopup />
      </div>
    </div>
  );
}

export default App;
