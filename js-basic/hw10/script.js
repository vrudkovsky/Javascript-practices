let span = document.createElement("span");
let form = document.getElementById("form");
let selectedI;

form.onclick = function(event) {
    let target = event.target;
    console.dir(event.target);
    if (target.tagName !== 'I') {
        return;
    }
    iconChange(target);
};

function iconChange(node) {
    selectedI = node;
    let x = selectedI.parentElement.getElementsByTagName('input').item(0);
    if ( x.type === "text") {
        x.type = "password";
        selectedI.classList.remove("fa-eye-slash");
        selectedI.classList.add("fa-eye");
    } else {
        x.type = "text";
        selectedI.classList.remove("fa-eye");
        selectedI.classList.add("fa-eye-slash");
    }
}

document.getElementById("btn").onclick = function (event) {
    let fieldFirstValue = document.getElementById("passwordField1").value;
    let fieldSecondValue = document.getElementById("passwordField2").value;
    if( fieldFirstValue === fieldSecondValue && fieldSecondValue !== "") {
        alert("You are welcome");
        span.innerHTML = "";
        event.preventDefault();
    } else {
        event.preventDefault();
        span.innerHTML = "Нужно ввести одинаковые значения";
        span.style.color = "red";
        document.getElementById("btn").before(span);
    }
};
