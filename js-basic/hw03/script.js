let num1 = +prompt("Enter number #1", '');
let num2 = +prompt('Enter number #2', '');
let operation = prompt('Enter operation', '');

let mathResult = function (num1, num2, operation) {

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log('Error')

    }

    return result;
};

console.log(mathResult(num1, num2, operation));


