const enableValidation = () => {
  const popupForms = Array.from(document.querySelectorAll(".popup__form"));

  popupForms.forEach((popupForm) => {
    const popupButtonSubmit = popupForm.querySelector(".popup__button-submit");
    const inputs = Array.from(popupForm.querySelectorAll(".popup__input"));

    toggleButtonState(inputs, popupButtonSubmit);

    inputs.forEach((input) => {
      //
      const popupError = popupForm.querySelector(`#${input.id}-error`);
      //

      input.addEventListener("input", () => {
        isValid(popupForm, input, popupError);
        toggleButtonState(inputs, popupButtonSubmit);
      });
    });
  });
};

const isValid = (popupForm, input) => {
  if (!input.validity.valid) {
    showInputError(popupForm, input, input.validationMessage);
  } else {
    hideInputError(popupForm, input);
  }
};

const showInputError = (popupForm, input, errorMessage) => {
  const popupError = popupForm.querySelector(`#${input.id}-error`);
  //input.classList.add("popup__input:invalid");
  popupError.textContent = errorMessage;
  popupError.classList.add("popup__error_active");
};

const hideInputError = (popupForm, input) => {
  const popupError = popupForm.querySelector(`#${input.id}-error`);
  //input.classList.remove("popup__input:invalid");
  popupError.classList.remove("popup__error_active");
  popupError.textContent = "";
};
const hasInvalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputs, saveButton) => {
  if (hasInvalidInput(inputs)) {
    saveButton.classList.add("popup__button-submit_disable");
    saveButton.disabled = true;
  } else {
    saveButton.classList.remove("popup__button-submit_disable");
    saveButton.disabled = false;
  }
};

export { enableValidation };
