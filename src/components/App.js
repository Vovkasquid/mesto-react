import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import React from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  //Джеб-джеб, уход под левую, хук правой (в стойке левши, конечно)
  //Создаём переменные состояния для попапов с помощью хуков
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  //При монтировании компонента вызовется этот хук
  //В нём произведём запрос на сервер, чтобы получить новые данные
  React.useEffect(() => {
      api.getUserInformation()
      .then(userData => {
        //Попадаем сюда, только когда оба промиса будут выполнены
        //Записывам полученные данные промиса в стейт currentUser
        setCurrentUser(userData);
      })
      .catch((err)=>{
        console.log(err);
      })
  }, []);

  //Объявляем константы для пропсов PopupWithForm
  const addPlacePopupChildren = (
    <>
      <input type="text" name="editPlaceName" id="place-input" className="edit-form__info-input edit-form__info-input_type_place" placeholder="Название"  required minLength="2" maxLength="30"/>
      <span className="edit-form__error-text place-input-error"></span>
      <input type="url" name="editLinkPlace" id="url-input" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на картинку"  required/>
      <span className="edit-form__error-text url-input-error"></span>
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

  //Обработчик обновления данных пользователя
  const handleUpdateUser = (userName, userAbout) => {
    api.editProfile(userName, userAbout)
      .then(userData => {
        //Высталяем локально новые данные
        setCurrentUser(userData);
        //Закрываем попап
        closeAllPopups();
    })
      .catch((err)=>{
        console.log(err);
    });
  }

  const handleUpdateAvatar = (avatar) => {
    api.editAvatar(avatar)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err)=>{
        console.log(err);
    });
  }

  //Возвращаем разметку всей страницы
  //Предварительно оборачваем все компоненты в провайдер контекста
  //Чтобы во всех них был доступен контекст
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
        <Header />
        <Main onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onCardClick={handleCardClick} />
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
          <PopupWithForm name='place' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={'Сохранить'}>
            {addPlacePopupChildren}
          </PopupWithForm>
        <PopupWithForm name='delete' title='Вы уверены?' onClose={closeAllPopups} buttonText={'Да'} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
