function Main() {

  //Временные колбеки открытия поппов редактирования Аватара, профиля и добавления нового места
  const handleEditAvatarClick = () => {
    const editAvatarPopup = document.querySelector('.edit-form_type_avatar');
    editAvatarPopup.classList.add('popup_status_active');
  }

  const handleEditProfileClick = () => {
    const editProfilePopup = document.querySelector('.edit-form_type_profile');
    editProfilePopup.classList.add('popup_status_active');
  }

  const handleAddPlaceClick = () => {
    const addPlacePopup = document.querySelector('.edit-form_type_place');
    addPlacePopup.classList.add('popup_status_active');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__person">
          <div className="profile__avatar">
            <div className="profile__overlay" onClick={handleEditAvatarClick}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name-container">
              <h1 className="profile__name">Владимир Блинов</h1>
              <button aria-label="Редактировать профиль" type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__description">Капитан очень ближнего плавания</p>
          </div>
        </div>
        <button aria-label="Добавить новое фото" type="button" className="profile__new-photo-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="content-gallery">
        <ul className="content-gallery__cards"></ul>
      </section>
    </main>
  );
}

export default Main;
