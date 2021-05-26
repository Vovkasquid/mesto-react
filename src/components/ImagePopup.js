function ImagePopup({card, onClose}) {
  return (
    <div className={`popup image-popup ${card && `popup_status_active`}`}>
      <div className="image-popup__container">
        <img src={card && card.link} alt="#" className="image-popup__picture"/>
        <p className="image-popup__description">{card && card.name}</p>
        <button aria-label="Закрыть" type="button" className="popup__close-btn image-popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
