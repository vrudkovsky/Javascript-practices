function createNewUser() {
    let firstName = prompt('Enter your first name', '');
    let lastName = prompt('Enter your last name', '');


    return {
        firstName: firstName,
        lastName: lastName,
        getLogin: function () {
            return (this.firstName[0] + this.lastName).toLowerCase();
        }

    }



    // console.log(newUser);
    // console.log(newUser.getLogin());


}

let newUser = createNewUser();

console.log(newUser.firstName);
console.log(newUser.lastName);
console.log('Login ' + newUser.getLogin());
