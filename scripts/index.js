import { restValidation, validationConfig } from "./validation";

restValidation();

let openedPopup = document.getElementById("popup");
let ButtonOpened = document.getElementById("button-opened");
let ButtonClose = document.getElementById("button-close");
let ButtonSubmit = document.getElementById("submit");
const submitImage = document.getElementById("submit-image");
const InputName = document.getElementById("input-name");
const inputOccupation = document.getElementById("input-occupation");
const NameProfile = document.querySelector(".profile__title");
const Occupation = document.querySelector(".profile__text");

const InputNameCard = document.getElementById("name-title");
const inputImageUrl = document.getElementById("image-url");

const imagePopup = document.querySelector("#popup-img");
const openedPopupAdd = document.getElementById("popup-add");
const ButtonOpenedAdd = document.getElementById("button-openedAdd");
const ButtonCloseAdd = document.getElementById("button-closeAdd");
let popuptext = document.querySelector("#popup-text");
const popupImage = document.querySelector("#popup-image");
const namePopup = document.querySelector("#name-popup");
const ButtonCloseImage = document.getElementById("button-close-image");
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

ButtonCloseImage.addEventListener("click", function () {
  imagePopup.classList.remove("popup_opened");
});

ButtonOpenedAdd.addEventListener("click", function () {
  openedPopupAdd.classList.add("popup_opened");
});

ButtonCloseAdd.addEventListener("click", function () {
  openedPopupAdd.classList.remove("popup_opened");
});

ButtonOpened.addEventListener("click", function () {
  openedPopup.classList.add("popup_opened");
});

ButtonClose.addEventListener("click", function () {
  openedPopup.classList.remove("popup_opened");
});

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
});
ButtonSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();

  const NameValue = InputName.value;
  const OccupationValue = inputOccupation.value;

  NameProfile.textContent = NameValue;
  Occupation.textContent = OccupationValue;

  openedPopup.classList.remove("popup_opened");
});
