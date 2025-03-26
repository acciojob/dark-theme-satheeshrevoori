function swapTheme() {
    let paraElement = document.getElementById("app");
    let buttonElement = document.getElementById("swap");
    paraElement.classList.toggle('day');
    paraElement.classList.toggle('night');
    buttonElement.classList.toggle('button_day');
    buttonElement.classList.toggle('button_night');
}