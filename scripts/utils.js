import Card from "./Card.js";

const popupElement = document.querySelector(".popup");
const popupImage = document.querySelector(".element__image");
const popupButtonClose = document.querySelector(".popup__button-close");

function handleOpenPopup(popup) {
  popup.classList.add("popup_opened");
}

function handleClosePopup(popup) {
  popup.classList.remove("popup_opened");
}

function setEventListeners() {
  this._element.addEventListener("click", () => {
    handleOpenPopup();
  });

  popupButtonClose.addEventListener("click", () => {
    handleClosePopup();
  });
}

function renderCards(initialCards) {
  initialCards.forEach((item) => {
    const card = new Card(item, "#element-template");
    const cardElement = card.createCard();

    document.querySelector(".elements").append(cardElement);
  });
}

export { handleOpenPopup, handleClosePopup, setEventListeners, renderCards };
