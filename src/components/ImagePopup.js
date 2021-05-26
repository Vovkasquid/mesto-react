function ImagePopup() {
  return (
    <div className="popup image-popup">
      <div className="image-popup__container">
        <img src="#" alt="#" className="image-popup__picture"/>
        <p className="image-popup__description">Вантовый мост</p>
        <button aria-label="Закрыть" type="button" className="popup__close-btn image-popup__close-button"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
