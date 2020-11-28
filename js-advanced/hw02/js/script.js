/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */

class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];

        try {
            if (size.size !== 'small' && size.size !== 'large') {
                throw new HamburgerException('Enter correct size')
            }
            if (stuffing.stuffing !== 'cheese'
                && stuffing.stuffing !== 'salad'
                && stuffing.stuffing !== 'potato') {
                throw new HamburgerException('Enter correct stuffing')
            }

        } catch (err) {
            console.log('enter correct data, error:', err);
        }
    }

    /* Размеры, виды начинок и добавок */
    static SIZE_SMALL = {size: 'small', price: 50, calories: 20};
    static SIZE_LARGE = {size: 'large', price: 100, calories: 40};
    static STUFFING_CHEESE = {stuffing: 'cheese', price: 10, calories: 20};
    static STUFFING_SALAD = {stuffing: 'salad',price: 20, calories: 5};
    static STUFFING_POTATO = {stuffing: 'potato', price: 15, calories: 10};
    static TOPPING_MAYO = {topping: 'mayo', price: 20, calories: 5};
    static TOPPING_SPICE = {topping: 'spice', price: 15, calories: 0};

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */

    addTopping(topping) {
        try {
            if (topping.topping !== 'mayo' && topping.topping !== 'spice') {
                throw new HamburgerException('Please, add correct topping!');
            }

            let match = false;
            this._toppings.forEach((el) => {
                if (topping === el) {
                    match = true;
                }
            });

            if (!match) {
                this._toppings.push(topping);
                console.log(`New topping ${topping.topping} was added`)
            }
            else {
                throw new HamburgerException('Already have this topping!');
            }
        }
        catch (err) {
            console.log('enter correct data, error:', err);
        }
    }

    removeTopping(topping) {
        try {
            let match = false;
            this._toppings.forEach((el) => {
                if (topping === el) {
                    match = true;
                }
            });

            if (!match) {
                throw new HamburgerException(`Topping ${topping.topping} wasn't added!`);
            } else {
                this._toppings.splice(this._toppings.indexOf(topping), 1);
            }
        }
        catch (err) {
            console.log('enter correct data, error:', err);
        }
    }

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
    getToppings() {
        return this._toppings;
    }

/**
 * Узнать размер гамбургера
 */
    getSize() {
        return this._size
    }

/**
 * Узнать начинку гамбургера
 */
    getStuffing() {
        return this._stuffing;
    }

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
    calculatePrice() {
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
    calculateCalories() {
        let totalCal = 0;
        totalCal += this._size.calories;
        totalCal += this._stuffing.calories;
        totalCal += this._toppings.reduce((total, item) => {
            return total + item.calories;
        }, 0)
        return totalCal;
    };
}

class HamburgerException{
    constructor(message){
        this._message = message;
        console.log('HamburgerException message:', message);
    }

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