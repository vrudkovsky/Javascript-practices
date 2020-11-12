function createNewUser() {
    let firstName = prompt('Enter your first name', '');
    let lastName = prompt('Enter your last name', '');
    let birthday = prompt('Enter your birthday', 'dd.mm.yyyy');
    let date = new Date();

    // console.log(typeof birthday);
    // console.log(date.getFullYear());
    // console.log(birthday.slice(6, 10));


    return {
        firstName: firstName,
        lastName: lastName,
        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        getAge: function () {
            return (date.getFullYear() - birthday.slice(6, 10));
        },
        getPassword: function () {
            return (newUser.firstName[0].toLowerCase()+newUser.lastName.toLowerCase()+ birthday.slice(6, 10));
        }

    }
}

let newUser = createNewUser();

console.log(newUser.firstName);
console.log(newUser.lastName);
console.log('Age: ' + newUser.getAge());
console.log('Login: ' + newUser.getLogin());
console.log('Password: ' + newUser.getPassword());


