let name = prompt('Please enter your name');

while (isFinite(parseInt(name)) || name === null || name === '') {
    name = prompt('Please enter your name agian');
}

let age = parseInt(prompt('Please enter your age'));

while(isNaN(age) || age === null || age === '') {
    age = prompt('Please enter your age again: ');
}

if (age < 18) {
    alert("You are not allowed to visit this website");
}
else if (age >= 18 && age <= 22) {
    let conf = confirm("Are you sure you want to continue?");
        if (conf) {
            alert(`Welcome, ${name}!`);
            } else alert(fMessage);
} else alert(`Welcome, ${name}!`);
