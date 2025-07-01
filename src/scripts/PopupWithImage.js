import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popup.querySelector(".popup__image");
    this._nameElementImg = this._popup.querySelector(".popup__title-image");
  }

  open({ titulo, image }) {
    console.log("Abriendo imagen:", titulo);
    this._nameElementImg.textContent = titulo;
    this._imageElement.src = image;
    this._imageElement.alt = titulo;

    super.open();
  }
}
export default PopupWithImage;
