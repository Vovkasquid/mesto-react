function PopupWithForm({name, title, children, isOpen}) {
  return (
    <div className={isOpen ? `popup edit-form edit-form_type_${name} popup_status_active` : 'popup edit-form edit-form_type_${name}'}>
      <form name="editProfileForm" className="edit-form__form-container" noValidate>
        <h2 className="edit-form__form-description">{title}</h2>
        {children}
      </form>
    </div>
  );
}

export default PopupWithForm;
