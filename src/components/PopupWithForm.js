import React from "react";

function PopupWithForm({name, title, children, isOpen, onClose, buttonText}) {
  return (
    <div className={isOpen ? `popup edit-form edit-form_type_${name} popup_status_active` : `popup edit-form edit-form_type_${name}`}>
      <form name="editProfileForm" className="edit-form__form-container" noValidate>
        <h2 className="edit-form__form-description">{title}</h2>
        {children}
        <button aria-label={buttonText} type="submit" className={`edit-form__submit-button edit-form__submit-button_type_${name}`}>{buttonText}</button>
        <button aria-label="Закрыть" type="button" className={`popup__close-btn edit-form__close-button edit-form__close-button_type_${name}`} onClick={onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
