import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__button-submit");
    this._submitButtonText = this._submitButton.textContent;
    this._handleSubmit = null;
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  _renderLoading(isLoading, loadingText = "Eliminando...") {
    if (isLoading) {
      this._submitButton.textContent = loadingText;
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = this._submitButtonText;
      this._submitButton.disabled = false;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      if (this._handleSubmit) {
        this._renderLoading(true);
        Promise.resolve(this._handleSubmit())
          .then(() => this.close())
          .catch((err) => console.error("Error al eliminar tarjeta:", err))
          .finally(() => this._renderLoading(false));
      }
    });
  }

  open() {
    this._submitButton.disabled = false;
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithConfirmation;
