function PopupWithForm({name, title, children}) {
  return (
    <div className={`popup edit-form edit-form_type_${name}`}>
      <form name="editProfileForm" className="edit-form__form-container" noValidate>
        <h2 className="edit-form__form-description">{title}</h2>
        {children}
      </form>
    </div>
  );
}

export default PopupWithForm;
