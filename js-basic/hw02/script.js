let inputNumber = +prompt('Enter the number divisible by 5: ', '10');

while (isNaN(inputNumber) || inputNumber === null || inputNumber === '') {
    inputNumber = +prompt('Enter the number divisible by 5: ', '10');
}

if (inputNumber > 0 && inputNumber < 5) {
    console.log("Sorry, there is no numbers");
} else {
    for (let i = 0; i <= inputNumber; ++i) {
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
