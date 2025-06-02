import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  handleOpenPopup,
  handleClosePopup,
  setEventListeners,
  renderCards,
} from "./utils.js";

const popupFormAdd = document.querySelector("#popup-add-form");
const popupFormProfile = document.querySelector("#popup-profile-form");
const menssengerError = document.querySelectorAll(".popup__error");
const openedPopupPofile = document.getElementById("popup-profile");
const buttonOpenedPofile = document.getElementById("button-opened");
const buttonCloseProfile = document.getElementById("button-close");
const buttonSubmitProfile = document.getElementById("submit");
const submitImage = document.getElementById("submit-image");
const InputName = document.getElementById("input-name");
const inputOccupation = document.getElementById("input-occupation");
const nameProfile = document.querySelector(".profile__title");
const Occupation = document.querySelector(".profile__occupation");

const imagePopup = document.querySelector("#popup-img");
const openedPopupAdd = document.getElementById("popup-add");
const buttonOpenedAdd = document.getElementById("button-openedAdd");
const buttonCloseAdd = document.getElementById("button-closeAdd");

const buttonCloseImage = document.getElementById("button-close-image");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
const cardTemplate = document.querySelector("#element-template");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disable",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_active",
};

const x1 = new FormValidator(popupFormProfile, validationConfig);
const x2 = new FormValidator(popupFormAdd, validationConfig);
x1.enableValidation();
x2.enableValidation();
renderCards(initialCards);
// function addCard(card) {
//   const newCard = cardTemplate.content
//     .querySelector(".element")
//     .cloneNode(true);
//   const cardList = document.querySelector(".elements");
//   const imageCard = newCard.querySelector(".element__image");
//   const nameCardElement = newCard.querySelector(".element__text");
//   const buttonLike = newCard.querySelector("#button-like");
//   const removeCard = newCard.querySelector("#remover-card");
//   imageCard.src = card.link;
//   nameCardElement.textContent = card.name;
//   InputNameCard.textContent = nameCardElement.name;
//   inputImageUrl.src = imageCard.link;

//   removeCard.addEventListener("click", () => {
//     newCard.remove();
//   });

//   buttonLike.addEventListener("click", (evt) => {
//     setEventListeners.like;
//   });

//   imageCard.addEventListener("click", () => {
//     imagePopup.classList.toggle("popup_opened");

//     popupImage.src = card.link;
//     namePopup.textContent = card.name;
//   });

//   cardList.prepend(newCard);
// }
buttonSubmitProfile.addEventListener("click", function (evt) {
  evt.preventDefault();

  const NameValue = InputName.value;
  const OccupationValue = inputOccupation.value;

  nameProfile.textContent = NameValue;
  Occupation.textContent = OccupationValue;

  openedPopupPofile.classList.remove("popup_opened");
  popupFormProfile.reset();
});

const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      popup.classList.remove("popup_opened");
      menssengerError.forEach((menssengerError) => {
        menssengerError.classList.remove("popup__error_active");
      });
      handleClosePopup(popup);
      popupFormProfile.reset();
      popupFormAdd.reset();
    }
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popup.classList.remove("popup_opened");

      menssengerError.forEach((menssangeError) => {
        menssangeError.classList.remove("popup__error_active");
      });
      popupFormProfile.reset();
      popupFormAdd.reset();
    }
  });
});
buttonCloseImage.addEventListener("click", function () {
  imagePopup.classList.remove("popup_opened");
});

buttonOpenedAdd.addEventListener("click", function () {
  submitImage.classList.add("popup__button-submit_disable");
  submitImage.disabled = true;
  handleOpenPopup(openedPopupAdd);
});

buttonCloseAdd.addEventListener("click", function () {
  handleClosePopup(openedPopupAdd);
  menssengerError.forEach((menssangeError) => {
    menssangeError.classList.remove("popup__error_active");
  });
  popupFormAdd.reset();
});

buttonOpenedPofile.addEventListener("click", function () {
  buttonSubmitProfile.classList.add("popup__button-submit_disable");
  buttonSubmitProfile.disabled = true;
  openedPopupPofile.classList.add("popup_opened");
});

buttonCloseProfile.addEventListener("click", function () {
  handleClosePopup(openedPopupPofile);

  menssengerError.forEach((menssangeError) => {
    menssangeError.classList.remove("popup__error_active");
  });
  popupFormProfile.reset();
});

submitImage.addEventListener("click", function (evt) {
  evt.preventDefault();
  const InputNameCard = document.getElementById("name-title").value;
  const inputImageUrl = document.getElementById("image-url").value;

  const cardItem = {
    name: InputNameCard,
    link: inputImageUrl,
  };

  const card = new Card(cardItem, "#element-template");
  const cardElement = card.createCard();

  document.querySelector(".elements").append(cardElement);

  openedPopupAdd.classList.remove("popup_opened");
  popupFormAdd.reset();
});
