class FormValidator {
  constructor(
    formElement,
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    }
  ) {
    this._formElement = formElement;
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    const popupButtonSubmit = this._formElement.querySelector(
      this._submitButtonSelector
    );
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );

    this._toggleButtonState(inputs, popupButtonSubmit);

    inputs.forEach((input) => {
      const popupError = this._formElement.querySelector(`#${input.id}-error`);

      input.addEventListener("input", () => {
        this._isValid(this._formElement, input, popupError);
        this._toggleButtonState(inputs, popupButtonSubmit);
      });
    });
  }

  _isValid = (popupForm, input) => {
    if (!input.validity.valid) {
      this._showInputError(popupForm, input, input.validationMessage);
    } else {
      this._hideInputError(popupForm, input);
    }
  };

  _showInputError = (popupForm, input, errorMessage) => {
    const popupError = popupForm.querySelector(`#${input.id}-error`);

    popupError.textContent = errorMessage;
    popupError.classList.add(this._errorClass);
  };

  _hideInputError = (popupForm, input) => {
    const popupError = popupForm.querySelector(`#${input.id}-error`);

    popupError.classList.remove(this._errorClass);
    popupError.textContent = "";
  };
  _hasInvalidInput = (inputs) => {
    return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputs, saveButton) => {
    if (this._hasInvalidInput(inputs)) {
      saveButton.classList.add(this._inactiveButtonClass);
      saveButton.disabled = true;
    } else {
      saveButton.classList.remove(this._inactiveButtonClass);
      saveButton.disabled = false;
    }
  };

  resetValidation() {
    const inputs = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    const submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );

    inputs.forEach((input) => {
      this._hideInputError(this._formElement, input);
    });

    this._toggleButtonState(inputs, submitButton);
  }
}

export default FormValidator;
