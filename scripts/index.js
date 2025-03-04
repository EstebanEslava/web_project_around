let openedPopup = document.getElementById("popup");
let ButtonOpened = document.getElementById("button-opened");
let ButtonClose = document.getElementById("button-close");
let ButtonSubmit = document.getElementById("submit");
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
const popupimage = document.querySelector("#popup-image");
const namePopup = document.querySelector("#name-popup");

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
const cardList = document.querySelector(".elements");
const cardTemplate = document.querySelector("#element-template");

initialCards.forEach((card) => {
  const newCard = cardTemplate.content
    .querySelector(".element")
    .cloneNode(true);

  const imageCard = newCard.querySelector(".element__image");
  const nameCardElement = newCard.querySelector(".element__text");
  //const buttonLike = newCard.querySelector("#button-like");
  //const removeCard = newCard.querySelector(".element-remove__card");
  imageCard.src = card.link;
  nameCardElement.textContent = card.name;
  InputNameCard.src = nameCardElement.name;
  inputImageUrl.textContent = imageCard.link;

  cardList.prepend(newCard);
});
ButtonOpenedAdd.addEventListener("click", function () {
  openedPopupAdd.classList.add("popup_opened");
});

ButtonCloseAdd.addEventListener("click", function () {
  openedPopupAdd.classList.remove("popup-add");
});

ButtonSubmit.addEventListener("click", (evt) => {
  evt.preventDefault();
});

removeCard.addEventListener("click", () => {
  newCard.remove();
});

buttonLike.addEventListener("click", () => {
  buttonLike.classList("");
});

imageCard.addEventListener("click", () => {
  imagePopup.showModal();

  popupimage.src = card.link;
  namePopup.textContent = card.name;
});

ButtonOpened.addEventListener("click", function () {
  openedPopup.classList.add("popup_opened");
});

ButtonClose.addEventListener("click", function () {
  openedPopup.classList.remove("popup");
});

ButtonSubmit.addEventListener("click", function (evt) {
  evt.preventDefault();

  const NameValue = InputName.value;
  const OccupationValue = inputOccupation.value;

  NameProfile.textContent = NameValue;
  Occupation.textContent = OccupationValue;

  openedPopup.classList.remove("popup");
});
