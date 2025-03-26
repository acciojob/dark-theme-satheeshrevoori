
function swapTheme() {
    let paraElement = document.getElementById("app");
    let buttonElement = document.getElementById("swap");
    paraElement.classList.toggle('night');
    buttonElement.classList.toggle('button_night');
}