import Card from "./Card.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";

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

const popupFormAdd = document.querySelector("#popup-add-form");
const popupFormProfile = document.querySelector("#popup-profile-form");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disable",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_active",
};

const formProfileValidator = new FormValidator(
  popupFormProfile,
  validationConfig
);
const formAddCardValidator = new FormValidator(popupFormAdd, validationConfig);
formProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  occupationSelector: ".profile__occupation",
});

const profileEditPopup = new PopupWithForm(
  "#popup-profile",
  (formData) => {
    userInfo.setUserInfo({
      name: formData.name,
      occupation: formData.occupation,
    });
  },
  formProfileValidator
);
profileEditPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  "#popup-add",
  (formData) => {
    const newCard = createCard({ name: formData.name, link: formData.link });
    cardSection.addItem(newCard);
  },
  formAddCardValidator
);
addCardPopup.setEventListeners();

document.querySelector("#button-opened").addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  const form = document.forms["editar"];
  form.name.value = userData.name;
  form.occupation.value = userData.occupation;
  profileEditPopup.resetValidation();
  profileEditPopup.open();
});

document.querySelector("#button-openedAdd").addEventListener("click", () => {
  addCardPopup.resetValidation();
  addCardPopup.open();
});

const popupWithImage = new PopupWithImage("#popup-img");
popupWithImage.setEventListeners();

function createCard(data) {
  const card = new Card(data, "#element-template", (titulo, image) => {
    popupWithImage.open({ titulo, image });
  });
  return card.createCard();
}

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);

cardSection.renderItems();
