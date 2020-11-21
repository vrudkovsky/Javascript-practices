let buttonStop = document.createElement("button"),
    buttonContinue = document.createElement("button"),
    images = ['img/1.jpg', 'img/2.jpg', 'img/3.JPG', 'img/4.png'],
    length = images.length,
    index  = 1;

buttonStop.innerHTML = "STOP";
buttonContinue.innerHTML =  "CONTINUE";

buttonStop.classList.add("button");
buttonContinue.classList.add("button");

document. querySelector("script").before(buttonStop);
buttonStop.before(buttonContinue);

buttonContinue.onclick = function (event) {
    buttonContinue.disabled = true;
    buttonStop.disabled = false;
    let interval = setInterval(function() {
        if(index === length) {
            index = 0;
        }
        document.getElementById('image_id').src = images[index++];
    }, 2000);
    buttonStop.onclick = function (event) {
        buttonContinue.disabled = false;
        buttonStop.disabled = true;
        clearInterval(interval);
    };
};
buttonContinue.onclick();
