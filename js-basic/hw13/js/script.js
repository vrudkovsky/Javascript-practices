const switchButton = document.querySelector(".toggle");

switchButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("click!!!")
    // localStorage.setItem("dark", "css/style2.css");
    if( localStorage.getItem("dark") === null ) {
        document.getElementById("style").href = "css/style2.css";
        localStorage.setItem("dark", "css/style2.css");
    } else {
        document.getElementById("style").href = "css/style.css";
        localStorage.removeItem("dark");
    }
})

// switchButton.onclick = function () {
//     if( localStorage.getItem("dark") === null ) {
//         document.getElementById("link").href = "css/style2.css";
//         localStorage.setItem("dark", "css/style2.css");
//     } else {
//         document.getElementById("link").href = "css/style.css";
//         localStorage.removeItem("dark");
//     }
// };

// let dark = localStorage.getItem("dark");

document.addEventListener('DOMContentLoaded', function () {
    if( localStorage.getItem("dark") !== null) {
        document.getElementById("style").href = "css/style2.css";
        localStorage.setItem("dark", "css/style2.css");
    }
})

