//activar el evento input para todos los inputs ( o sea que al escribir en los inputs desencadenemosun evento)

const enableValidation = () => {
  const popupForms = Array.from(document.querySelectorAll(".popup__form"));

  popupForms.forEach((popupForm) => {
    /*console.log(popupForm);*/
    const popupButton = popupForm.querySelector(".popup__button-submit");
    const inputs = Array.from(popupForm.querySelectorAll(".popup__input"));
    const btnsSubmits = Array.from(
      popupForm.querySelectorAll(".popup__button-submit")
    );
    toggleButtonState(inputs, popupButton);

    inputs.forEach((input) => {
      //  console.log(input.id);
      const popupError = popupForm.querySelector(`#${input.id}-error`);
      //   console.log(popupError);

      input.addEventListener("input", () => {
        isValid(popupForm, input, popupError);
        toggleButtonState(inputs, popupButton);
      });
    });
  });
};

//.popup__button-submit_disable

const isValid = (popupForm, input) => {
  if (!input.validity.valid) {
    showInputError(popupForm, input, input.validationMessage);
  } else {
    hideInputError(popupForm, input);
  }
};

const showInputError = (popupForm, input, errorMessage) => {
  const popupError = popupForm.querySelector(`#${input.id}-error`);
  input.classList.add("popup__input:invalid");
  popupError.textContent = errorMessage;
  popupError.classList.add("popup__error_active");
};

const hideInputError = (popupForm, input) => {
  const popupError = popupForm.querySelector(`#${input.id}-error`);
  input.classList.remove("popup__input:invalid");
  popupError.classList.remove("popup__error_active");
  popupError.textContent = "";
};
const hasInvalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputs, saveButton) => {
  console.log(inputs);
  if (hasInvalidInput(inputs)) {
    saveButton.classList.add("popup__button-submit_disable");
  } else {
    saveButton.classList.remove("popup__button-submit_disable");
  }
};

/*const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((popupForm) => {
    popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(popupForm);
  });
};

enableValidation();

*/
/*
const setEventListeners = (popupForm) => {
  const inputList = Array.from(popupForm.querySelectorAll(".popup__input"));

  const saveButton = formElement.querySelector(".popup__button-submit");

  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      isValid(popupForm, input);

      toggleButtonState(inputList, saveButton);
    });
  });
};*/

export { enableValidation };

/*const setSubmitButtonState  (isFormValid) => {
  const buttonsSubmit = document.querySelectorAll(".popup__button-submit");
  buttonsSubmit.forEach((button) => {
    if (isFormValid) {
      button.removeAttribute("disabled");
      button.classList.remove("popup__button-submit_disable");
    } else {
      button.setAttribute("disabled", true);
      button.classList.add("popup__button-submit_disable");
    }
  });
}*/
