const list = document.querySelector('.list');
const ul = document.createElement('ul');
list.prepend(ul);
const countDown = document.querySelector('.timer');
const arr = ['New York', 'Chicago', 'Frisco', 'Los Angeles', 'Washington', 'Mayami'];
let timeDelay = 5;
let counter = document.getElementById('counter');



function showArray() {
    arr.map((item) => {
        ul.innerHTML += `<li>${item}</li>`;
    })
}



let timer = setInterval(function() {
    counter.innerHTML = --timeDelay;
    if (!timeDelay) {
        clearInterval(timer);
        list.innerHTML = '';
        // document.querySelector("body").style.display='none';
    }
}, 1000);
counter.innerHTML = timeDelay;


showArray();
