import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  //Создаём ref для инпута
  const inputRef = React.createRef();

  //Переменная, для наполнения разметки
  const editAvatarPopupChildren = (
    <>
      <input type="url" ref={inputRef} name="editLinkAvatar" id="url-input-avatar" className="edit-form__info-input edit-form__info-input_type_link" placeholder="Ссылка на аватар"  required/>
      <span className="edit-form__error-text url-input-avatar-error"></span>
    </>
  );

  //Обработчик самбима аватары
  function handleSubmit(event) {
    event.preventDefault();
    //Дёргаем колбек обновления аватары
    onUpdateAvatar(inputRef.current.value);
  }

  return (
    <PopupWithForm name='avatar' title='Обновить аватар' isOpen={isOpen} onClose={onClose} buttonText={'Сохранить'} onSubmit={handleSubmit}>
      {editAvatarPopupChildren}
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
