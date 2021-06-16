import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose}) {
  //Константа с наполнением компонента
  const editProfilePopupChildren = (
    <>
      <input type="text" name="editProfileName" id="name-input" className="edit-form__info-input edit-form__info-input_type_name" placeholder="Имя"  required minLength="2" maxLength="40"/>
      <span className="edit-form__error-text name-input-error"></span>
      <input type="text" name="editProfileDescription" id="description-input" className="edit-form__info-input edit-form__info-input_type_description" placeholder="Описание"  required minLength="2" maxLength="200"/>
      <span className="edit-form__error-text description-input-error"></span>
    </>
  );

  return (
    <PopupWithForm name='profile' title='Редактировать профиль' isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'}>
      {editProfilePopupChildren}
    </PopupWithForm>
  );
}

export default EditProfilePopup;
