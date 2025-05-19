import { enableValidation } from "./validate.js";

enableValidation();
const popupFormAdd = document.querySelector("#popup-add-form");
const popupForm = document.querySelector(".popup__form");
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

const InputNameCard = document.getElementById("name-title");
const inputImageUrl = document.getElementById("image-url");

const imagePopup = document.querySelector("#popup-img");
const openedPopupAdd = document.getElementById("popup-add");
const buttonOpenedAdd = document.getElementById("button-openedAdd");
const buttonCloseAdd = document.getElementById("button-closeAdd");
let popuptext = document.querySelector("#popup-text");
const popupImage = document.querySelector("#popup-image");
const namePopup = document.querySelector("#name-popup");
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

initialCards.forEach((card) => {
  addCard(card);
});
function addCard(card) {
  const newCard = cardTemplate.content
    .querySelector(".element")
    .cloneNode(true);
  const cardList = document.querySelector(".elements");
  const imageCard = newCard.querySelector(".element__image");
  const nameCardElement = newCard.querySelector(".element__text");
  const buttonLike = newCard.querySelector("#button-like");
  const removeCard = newCard.querySelector("#remover-card");
  imageCard.src = card.link;
  nameCardElement.textContent = card.name;
  InputNameCard.textContent = nameCardElement.name;
  inputImageUrl.src = imageCard.link;
  removeCard.addEventListener("click", () => {
    newCard.remove();
  });

  buttonLike.addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__button-like_active");
  });

  imageCard.addEventListener("click", () => {
    imagePopup.classList.toggle("popup_opened");

    popupImage.src = card.link;
    namePopup.textContent = card.name;
  });

  cardList.prepend(newCard);
}
buttonSubmitProfile.addEventListener("click", function (evt) {
  evt.preventDefault();

  const NameValue = InputName.value;
  const OccupationValue = inputOccupation.value;

  nameProfile.textContent = NameValue;
  Occupation.textContent = OccupationValue;

  openedPopupPofile.classList.remove("popup_opened");
  popupForm.reset();
});
const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target === popup) {
      popup.classList.remove("popup_opened");
      menssengerError.forEach((menssengerError) => {
        menssengerError.classList.remove("popup__error_active");
      });
      handlerClosePopup(popup);
      popupForm.reset();
      popupFormAdd.reset();
    }
  });

  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      popup.classList.remove("popup_opened");

      menssengerError.forEach((menssangeError) => {
        menssangeError.classList.remove("popup__error_active");
      });
      popupForm.reset();
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
  openedPopupAdd.classList.add("popup_opened");
});

buttonCloseAdd.addEventListener("click", function () {
  handlerClosePopup(openedPopupAdd);
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
  handlerClosePopup(openedPopupPofile);

  menssengerError.forEach((menssangeError) => {
    menssangeError.classList.remove("popup__error_active");
  });
  popupForm.reset();
});
function handlerClosePopup(openedPopup) {
  openedPopup.classList.remove("popup_opened");
}

submitImage.addEventListener("click", function (evt) {
  evt.preventDefault();
  const InputNameCard = document.getElementById("name-title").value;
  const inputImageUrl = document.getElementById("image-url").value;

  const card = {
    name: InputNameCard,
    link: inputImageUrl,
  };

  addCard(card);

  openedPopupAdd.classList.remove("popup_opened");
  popupFormAdd.reset();
});
