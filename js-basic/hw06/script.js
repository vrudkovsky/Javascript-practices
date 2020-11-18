const arr = ['hello', 'world', 23, '23', null];
// const arr = ['hello', true, 'world', sayHi = () => {alert('Hello')}, 23, false, '23', null, 15, undefined, {name: 'John'}, [0, 1, 2, 3], 'wow'];

function filterBy(array, type) {
    let newArray = [];

    array.forEach((item) => {
        if (typeof item !== type) {
            newArray.push(item)
        }
    })
    console.log(newArray);
}

console.log(typeof arr);
filterBy(arr, 'string');
filterBy(arr, 'int');
filterBy(arr, 'null');
filterBy(arr, 'object');