import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, formValidator) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector("form");
    this._inputList = this._form.querySelectorAll("input");
    this._formValidator = formValidator;
    this._submitButton = this._form.querySelector(".popup__button-submit");
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  _renderLoading(isLoading, loadingText = "Guardando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._renderLoading(true);

      this._handleFormSubmit(this._getInputValues())

        .then(() => {
          this.close();
        })

        .catch((err) => {
          console.error("Error en el envío del formulario:", err);
        })
        .finally(() => {
          this._renderLoading(false);
        });
    });
  }

  resetValidation() {
    this._form.reset();
    this._formValidator.resetValidation();
  }

  close() {
    super.close();
  }
}

export default PopupWithForm;
