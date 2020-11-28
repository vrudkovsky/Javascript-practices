/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
    try {
        if (size.size!=='small'&& size.size!=='large') {
            throw new HamburgerException('Enter the correct size');
        }
        if (stuffing.stuffing!=='cheese'
            && stuffing.stuffing!=='salad'
            && stuffing.stuffing!=='potato') {
            throw new HamburgerException('Enter correct stuffing')
        }
    } catch (err) {
        console.log('Enter correct data, The error is ', err.message);
    }

}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {size: 'small', price: 50, calories: 20};
Hamburger.SIZE_LARGE = {size: 'large', price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {stuffing: 'cheese', price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {stuffing: 'salad',price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {stuffing: 'potato', price: 15, calories: 10};
Hamburger.TOPPING_MAYO = {topping: 'mayo', price: 20, calories: 5};
Hamburger.TOPPING_SPICE = {topping: 'spice', price: 15, calories: 0};

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function (topping) {
    for (let i = 0; i < this._toppings.length; i++) {
        if (this._toppings[i] === topping) {
            throw new HamburgerException('Dubpicated topping')
        }
    }
    this._toppings.push(topping);
}

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function(topping) {
    try {
        if (this._toppings.length === 0) {
            throw new HamburgerException('There is no toppings');
        }
        this._toppings.forEach(function (item, i, toppings) {
            if (item === topping) {
                toppings.splice(i, 1);
            }
        })
    } catch (err) {
        console.log('Enter correct topping name, The error is ', err.message);
    }
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function() {
    return this._toppings;
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {
    return this._size
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {
    let totalSum = 0;
    totalSum += this._size.price;
    totalSum += this._stuffing.price;
    totalSum += this._toppings.reduce((total, item) => {
        return total + item.price;
    }, 0)
    return  totalSum;
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {
    let totalCal = 0;
    totalCal += this._size.calories;
    totalCal += this._stuffing.calories;
    totalCal += this._toppings.reduce((total, item) => {
        return total + item.calories;
    }, 0)
    return totalCal;
};

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (message = 'No errors!') {
    this.message = message;
    console.log('HamburgerException message:', message);
}


// маленький гамбургер с начинкой из сыра
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());

// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?
console.log("Price with spice: %f", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE);

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("You Have %d toppings", hamburger.getToppings().length);

// не передали обязательные параметры
let h2 = new Hamburger();

// передаем некорректные значения, добавку вместо размера
let h3 = new Hamburger(Hamburger.TOPPING_SPICE, Hamburger.TOPPING_SPICE);

// добавляем много добавок
let h4 = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
