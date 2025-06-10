import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(PopupSelector) {
    super(PopupSelector);
    this._imageElement = this._popup.querySelector("#popup-image");
    this._nameElementImg = this._popup.querySelector("#name-popup");
  }

  open({ titulo, image }) {
    this._nameElementImg.textContent = titulo;
    this._imageElement.src = image;
    this._imageElement.alt = titulo;

    super.open();
  }
}
export default PopupWithImage;
