import logo from './images/logo_mesto.svg';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className="page">
      <header className="header page__header">
        <img src={logo} alt="Логотип соцсети Место" className="logo"/>
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__person">
            <div className="profile__avatar">
              <div className="profile__overlay"></div>
            </div>
            <div className="profile__info">
              <div className="profile__name-container">
                <h1 className="profile__name">Владимир Блинов</h1>
                <button aria-label="Редактировать профиль" type="button" className="profile__edit-button"></button>
              </div>
              <p className="profile__description">Капитан очень ближнего плавания</p>
            </div>
          </div>
          <button aria-label="Добавить новое фото" type="button" className="profile__new-photo-button"></button>
        </section>

        <section className="content-gallery">
          <ul className="content-gallery__cards"></ul>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>

      <div className="popup edit-form edit-form_type_profile">
        <form name="editProfileForm" className="edit-form__form-container" noValidate>
          <h2 className="edit-form__form-description">Редактировать профиль</h2>
          <input type="text" name="editProfileName" id="name-input" className="edit-form__info-input edit-form__info-input_type_name" placeholder="Имя" value="" required minLength="2" maxLength="40"/>
          <span className="edit-form__error-text name-input-error"></span>
          <input type="text" name="editProfileDescription" id="description-input" className="edit-form__info-input edit-form__info-input_type_description" placeholder="Описание" value="" required minLength="2" maxLength="200"/>
          <span className="edit-form__error-text description-input-error"></span>
          <button aria-label="Сохранить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_profile">Сохранить</button>
          <button aria-label="Закрыть" type="button" className="popup__close-btn edit-form__close-button edit-form__close-button_type_profile"></button>
        </form>
      </div>

      <div className="popup edit-form edit-form_type_place">
        <form name="editProfileForm" className="edit-form__form-container" noValidate>
          <h2 className="edit-form__form-description">Новое место</h2>
          <input type="text" name="editPlaceName" id="place-input" className="edit-form__info-input edit-form__info-input_type_place" placeholder="Название" value="" required minLength="2" maxLength="30"/>
          <span className="edit-form__error-text place-input-error"></span>
          <input type="url" name="editLinkPlace" id="url-input" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на картинку" value="" required/>
          <span className="edit-form__error-text url-input-error"></span>
          <button aria-label="Сохранить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_place">Создать</button>
          <button aria-label="Закрыть" type="button" className="popup__close-btn edit-form__close-button edit-form__close-button_type_place"></button>
        </form>
      </div>

      <div className="popup edit-form edit-form_type_delete">
        <form name="editProfileDelete" className="edit-form__form-container" noValidate>
          <h2 className="edit-form__form-description edit-form__form-description_type_delete">Вы уверены?</h2>
          <button aria-label="Удалить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_delete">Да</button>
          <button aria-label="Закрыть" type="button" className="popup__close-btn edit-form__close-button edit-form__close-button_type_place"></button>
        </form>
      </div>

      <div className="popup edit-form edit-form_type_avatar">
        <form name="editAvatarForm" className="edit-form__form-container" noValidate>
          <h2 className="edit-form__form-description">Обновить аватар</h2>
          <input type="url" name="editLinkAvatar" id="url-input-avatar" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на аватар" value="" required/>
          <span className="edit-form__error-text url-input-avatar-error"></span>
          <button aria-label="Сохранить" type="submit" className="edit-form__submit-button edit-form__submit-button_type_place">Сохранить</button>
          <button aria-label="Закрыть" type="button" className="popup__close-btn edit-form__close-button edit-form__close-button_type_place"></button>
        </form>
      </div>

      <div className="popup image-popup">
        <div className="image-popup__container">
          <img src="#" alt="#" className="image-popup__picture"/>
          <p className="image-popup__description">Вантовый мост</p>
          <button aria-label="Закрыть" type="button" className="popup__close-btn image-popup__close-button"></button>
       </div>
      </div>
    </div>
    </div>
  );
}

export default App;
