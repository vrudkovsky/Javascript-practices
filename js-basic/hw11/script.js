let buttons = document.querySelectorAll("button");

document.onkeypress = function (event) {
    for (let button of buttons) {
        button.style.backgroundColor = "black";
        if(event.key.toLowerCase() === button.innerText.toLowerCase()) {
            button.style.backgroundColor = "blue";
        }
    }
};