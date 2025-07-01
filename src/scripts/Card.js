class Card {
  constructor(data, cardSelector, handleCardClick, handleDeleteClick) {
    this._name = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  createCard() {
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector(".element__image");
    this._imageElement.src = this._image;
    this._element.querySelector(".element__text").textContent = this._name;
    this._like = this._element.querySelector(".element__button-like");
    this._removeCard = this._element.querySelector(".element__remove-card");
    this._setEventListeners();
    return this._element;
  }
  _setEventListeners() {
    this._removeCard.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });

    this._like.addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__button-like_active");
    });

    this._imageElement.addEventListener("click", () => {
      this._handleCardClick(this._name, this._image);
    });
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }
}

export default Card;
