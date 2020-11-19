const imgs = document.querySelectorAll('.image-to-show');
const imgsArr = [ ...imgs];
const btnStop = document.querySelector('.btn-stop');
const btnContinue = document.querySelector('.btn-continue');

let counter = 1;
imgsArr[0].style.display  = 'block';
const showImages = (arr) => {
    if (counter > 0) {
        arr[counter - 1].style.display = 'none';
    }

    if (counter === imgsArr.length) {
        counter = 0;
    }

    arr[counter].style.display = 'block';
    counter++;
};

let imageSlider = setInterval(showImages, 10000, imgsArr);

let wasClicked = true;

btnStop.addEventListener('click', ()=>{
    clearInterval(imageSlider);
    wasClicked = false;
});

btnContinue.addEventListener('click', ()=>{
    if (!wasClicked) {
        imageSlider = setInterval(showImages, 1000, imgsArr);
    }
    wasClicked = true;
});


console.log(imgs);
console.log(imgsArr);