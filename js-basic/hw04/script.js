function createNewUser() {
    let name = prompt('Enter your first name', '');
    let surname = prompt('Enter your last name', '');

    let newUser = {
        getLogin() {
            let login = this.firstName[0] + this.lastName;
            return login.toLowerCase();
        }
    };


    Object.defineProperty(newUser, 'firstName', {
        get function() {
            return name;
        },
        set function(newFirstName) {
            return name = newFirstName;
        },
        configurable: true,
        enumerable: false,
        value: name

    });

    Object.defineProperty(newUser, 'lastName', {
        get function() {
            return surname;
        },
        set function(newSurname) {
            return surname = newSurname;
        },
        configurable: true,
        enumerable: false,
        value: surname

    });

    return newUser;
}

const userone = createNewUser();

console.log(userone);
console.log(userone.getLogin());
