
let openedPopup = document.getElementById("popup")
let ButtonOpened = document.getElementById("button-opened")
let ButtonClose = document.getElementById("button-close")
let ButtonSubmit = document.getElementById("submit")
const InputName = document.getElementById("input-name")
const inputOccupation = document.getElementById("input-occupation")
const NameProfile = document.querySelector(".profile__title")
const Occupation = document.querySelector(".profile__text")

ButtonOpened.addEventListener('click', function() {
    openedPopup.classList.add("popup_opened")
})

ButtonClose.addEventListener('click', function() {
    openedPopup.classList.remove("popup")
})

ButtonSubmit.addEventListener("click", function(evt) {
    evt.preventDefault()


    const NameValue = InputName.value
    const OccupationValue = inputOccupation.value
    

    NameProfile.textContent = NameValue
    Occupation.textContent = OccupationValue

    openedPopup.classList.remove("popup")
})









