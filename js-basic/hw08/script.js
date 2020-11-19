const price = document.getElementById('price-input');
const priceSpan = document.createElement('span');
const closeButton = document.createElement('button');
const closeButtonImg = document.createElement('img');
const warning = document.createElement('span');

price.addEventListener('focus',  function foo() {
    this.style.borderColor = 'rgba(75, 253, 75, .8)';
});

price.addEventListener('blur', function () {
    if (parseFloat(price.value) < 0 || isNaN (parseFloat(price.value))){
        priceSpan.remove();
        price.style.backgroundColor='rgba(252, 227, 229, .5)';
        document.querySelector('label').appendChild(warning);
        warning.innerText="Enter correct price!";
        warning.classList.add('warning-text');
    } else {
        this.style.borderColor = '';
        warning.innerText='';
        document.querySelector('label').appendChild(priceSpan);
        priceSpan.innerText = `Current price: ${parseFloat(price.value)}$`;
        priceSpan.classList.add('span-price');
        priceSpan.appendChild(closeButton);
        closeButton.classList.add('close');
        closeButton.appendChild(closeButtonImg);
        closeButtonImg.setAttribute("src", "close.png");
        closeButtonImg.setAttribute("width", "16px");
        closeButton.addEventListener('click', () => {
            priceSpan.remove();
            price.value = '';
            price.style.backgroundColor = '';
        })
    }
});