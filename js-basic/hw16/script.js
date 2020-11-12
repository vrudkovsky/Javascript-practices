// let input = +prompt("Введите число: ");
//
// let factorial = function (x) {
//     let result = 1;
//     for (let i = 1; i <= x; i++){
//         result *= i;
//     }
//     return result;
// };
//
// console.log(factorial(input));


// n = 5; for (var f=1; n; f*=n--);


let input = +prompt("Введите число:");

let factorial = x => {
    let f = 1;
    for ( ; x; f *=x--){}
    return f;
};

console.log(factorial(input));