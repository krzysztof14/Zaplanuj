const input = document.querySelector("#userName");
const button = document.querySelector("#submitName");
const userNameField = document.querySelector("#showName");
const formContainer = document.querySelector(".userNameForm-container");
const desktopDisplay = document.querySelector("#desktop-display");

const desktopRecipes = document.querySelector("#recipesAdd");
const recipesList = document.querySelector(".container-recipes-list");

const desktopSchedules = document.querySelector("#schedulesAdd");
const schedulesList = document.querySelector(".container-schedules-list")

const desktop = document.querySelector("#desktop");


//USERNAME FORM


const removebutton = document.querySelector("#remove");


userNameField.innerText = localStorage.getItem("name");

if (userNameField.innerText !== "") {
    userNameField.innerText = localStorage.getItem("name");
    formContainer.classList.add("form-display")
}

button.addEventListener("click", function (e) {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    } else {
        localStorage.removeItem("name");
        localStorage.setItem("name", input.value);
        userNameField.innerText = localStorage.getItem("name")
    }
    e.preventDefault();
    formContainer.classList.add("form-display")
});

removebutton.addEventListener("click", function () {
    localStorage.removeItem("name");
    userNameField.innerText = "" ;
    formContainer.classList.remove("form-display");
    desktopDisplay.classList.add("invisible");
    recipesList.classList.add("invisible");
    schedulesList.classList.add("invisible");
});

//SWITCHING DESKTOP VIBILITY - TOGGLE USERFORM/DESKTOP

if (localStorage.getItem("name") !== null) {
    desktopDisplay.classList.remove("invisible")
}

button.addEventListener("click", ()=> {
    desktopDisplay.classList.remove("invisible")
});

//SWITCHING DESKTOP VIBILITY - SHOW RECIPES LIST

desktopRecipes.addEventListener("click", () => {
    recipesList.classList.remove("invisible");
    formContainer.classList.add("form-display");
    desktopDisplay.classList.add("invisible");
    schedulesList.classList.add("invisible");
})

//SWITCHING DESKTOP VIBILITY - SHOW SCHEDULES LIST

desktopSchedules.addEventListener("click", () => {
    schedulesList.classList.remove("invisible");
    formContainer.classList.add("form-display");
    desktopDisplay.classList.add("invisible");
    recipesList.classList.add("invisible");
  
})

//SWITCHING DESKTOP VIBILITY - SHOW DESkTOP
    desktop.addEventListener("click", () => {
        desktopDisplay.classList.remove("invisible");
        formContainer.classList.add("form-display");
        recipesList.classList.add("invisible");
        schedulesList.classList.add("invisible");
    })
    