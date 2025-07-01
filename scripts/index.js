import Card from "./Card.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import Api from "./Api.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    Authorization: "632241b3-b0ea-47f0-9bf4-eff9592fce79",
    "Content-Type": "application/json",
  },
});

//APIS

api
  .getInitialCards()
  .then((initialCards) => {
    const cardSection = new Section(
      {
        items: initialCards.reverse(),
        renderer: (item) => {
          const cardElement = createCard(item);
          cardSection.addItem(cardElement);
        },
      },
      ".elements"
    );

    cardSection.renderItems();
  })
  .catch((err) => console.error(err));

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo({
      name: data.name,
      occupation: data.about,
    });
    userInfo.setUserAvatar(data.avatar);
  })
  .catch((err) =>
    console.error("Error al obtener los datos del usuario:", err)
  );

//FUNCION DE CFREAR TARJETAS

function createCard(data) {
  const card = new Card(
    data,
    "#element-template",
    (titulo, image) => {
      popupWithImage.open({ titulo, image });
    },
    (cardInstance) => {
      deleteCard.open();
      deleteCard.setSubmitAction(() => {
        return api
          .removeCard(data._id)
          .then(() => {
            cardInstance.removeCard();
            deleteCard.close();
          })
          .catch((err) => console.error(err));
      });
    }
  );
  return card.createCard();
}

//    SELECTORES DE FORMI¿ULARIOS DEL DOM

const popupFormAdd = document.querySelector("#popup-add-form");
const popupFormProfile = document.querySelector("#popup-profile-form");
const popupFormAvatar = document.querySelector("#popup-edit-avatar");

//    CONFIGURACION DE LA VALIDACIÓN

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button-submit_disable",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_active",
};

//    INSTACIAS DE VALIDADORES

const formProfileValidator = new FormValidator(
  popupFormProfile,
  validationConfig
);
formProfileValidator.enableValidation();

const formAddCardValidator = new FormValidator(popupFormAdd, validationConfig);
formAddCardValidator.enableValidation();

const formAvatarValidator = new FormValidator(
  popupFormAvatar,
  validationConfig
);
formAvatarValidator.enableValidation();

//    INSTACIA DE USUARIO

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  occupationSelector: ".profile__occupation",
  avatarSelector: ".profile__image",
});

// POPUPS: EDITAR PERFIL, AÑADIR TARJETA Y AVATAR

const profileEditPopup = new PopupWithForm(
  "#popup-profile",
  (formData) => {
    return api
      .editUserInfo(formData)
      .then((data) => {
        userInfo.setUserInfo({
          name: data.name,
          occupation: data.about,
        });
        userInfo.setUserAvatar(data.avatar);
      })
      .catch((err) => console.error(err));
  },
  formProfileValidator
);
profileEditPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  "#popup-add",
  (formData) => {
    return api.addNewCard(formData).then((cardData) => {
      const cardElement = createCard(cardData);
      document.querySelector(".elements").prepend(cardElement);
    });
  },
  formAddCardValidator
);
addCardPopup.setEventListeners();

const avatarEditPopup = new PopupWithForm(
  "#popup-avatar",
  (formData) => {
    return api.editUserAvatar(formData.link).then((data) => {
      userInfo.setUserAvatar(data.avatar);
    });
  },
  formAvatarValidator
);
avatarEditPopup.setEventListeners();

//    POPUP IMAGEN AMPLIADA

const popupWithImage = new PopupWithImage("#popup-img");
popupWithImage.setEventListeners();

//    POPUP DE CONFIRMACION DE BORRADO

const deleteCard = new PopupWithConfirmation("#popup-alert");
deleteCard.setEventListeners();

//EVENTOS DE BOTONES

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

document.querySelector("#button-openedAvatar").addEventListener("click", () => {
  avatarEditPopup.resetValidation();
  avatarEditPopup.open();
});
