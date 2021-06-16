import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({isOpen, onClose}) {
  //Переменная, для наполнения разметки
  const addPlacePopupChildren = (
    <>
      <input type="text" name="editPlaceName" id="place-input" className="edit-form__info-input edit-form__info-input_type_place" placeholder="Название"  required minLength="2" maxLength="30"/>
      <span className="edit-form__error-text place-input-error"></span>
      <input type="url" name="editLinkPlace" id="url-input" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на картинку"  required/>
      <span className="edit-form__error-text url-input-error"></span>
    </>
  );

  return (
    <PopupWithForm name='place' title='Новое место' isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'}>
      {addPlacePopupChildren}
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
