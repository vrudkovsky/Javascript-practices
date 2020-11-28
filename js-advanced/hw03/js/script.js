/**
 * Game Whack a Mole
 *
 * */

const circles = document.getElementsByTagName('td');
const score = document.getElementById('score');
const start = document.getElementById('start');
let  msgResult = document.getElementById('result');
let lastCircle;
let count = 0;
let countActive = 0;
let time;

class Game {
    static getRandomCircles(circles) {
        const id = Math.floor(Math.random() * circles.length);
        const circle = circles[id];
        if (circle === lastCircle) {
            return circle;
        }
        lastCircle = circle;
        return circle;
    }

    static doColored() {
        if (countActive > 50) {
            msgResult.textContent = 'Your score: ' + ' ' + (count >= 25 ? "winner!" : "loser!");
            Game.clear();
        }
        const circle = Game.getRandomCircles(circles);
        circle.classList.add('active');
        countActive += 1;
        setTimeout(() => {
            circle.classList.add('red');
            circle.classList.remove('active');
            if (Game.doColored()) return;
        }, time);

        for (let i = 0; i < circles.length; i++) {
            circles[i].onclick = (function () {
                if (circles[i].classList.contains('active')) {
                    count++;
                    circles[i].classList.add('green');
                    score.textContent = count;
                }
            });
        }
    }

    static clear() {
        setTimeout(function () {
            location.reload()
        }, 2000);
    }
}

start.addEventListener('click', function () {
    const setLevel = function () {
        const btns = document.querySelectorAll('.btn');
        for (let i = 0; i < btns.length; i++) {
            let item = btns[i];
            let setTime = item.getAttribute('data-time');
            if (item.classList.contains('active')) {
                time = setTime;
                start.style.backgroundColor = 'green';
                score.textContent = 0;
                msgResult.textContent = '';
                count = 0;
                Game.doColored();
            }
        }
    }
    setLevel();
    start.setAttribute('disabled', 'true');
});

let parent = document.querySelector('#parent');
parent.addEventListener('click', function (e) {
    if (e.target !== e.currentTarget){
        let clickeditem = e.target;
        clickeditem.style.backgroundColor = 'green';
        clickeditem.classList.add('active');
    }
});
