function Main() {
  return (
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
  );
}

export default Main;
