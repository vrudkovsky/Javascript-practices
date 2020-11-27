/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    try {
        if (size.size !== 'small' && size.size !== 'large') {
            throw new HamburgerException('Enter the correct size');
        } else {
            this._size = size;
        }
        if (stuffing.stuffing !== 'cheese'
            && stuffing.stuffing !== 'salad'
            && stuffing.stuffing !== 'potato') {
            throw new HamburgerException('Enter correct stuffing')
        } else {
            this._stuffing = stuffing;
        }

        this._toppings = [];

    } catch (err) {
        console.log('Enter correct data, The error is ', err.message);
    }

}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {size: 'small', price: 50, calories: 20};
Hamburger.SIZE_LARGE = {size: 'large', price: 100, calories: 40};
Hamburger.STUFFING_CHEESE = {stuffing: 'cheese', price: 10, calories: 20};
Hamburger.STUFFING_SALAD = {stuffing: 'salad', price: 20, calories: 5};
Hamburger.STUFFING_POTATO = {stuffing: 'potato', price: 15, calories: 10};
Hamburger.TOPPING_MAYO = {stuffing: 'mayo', price: 20, calories: 5};
Hamburger.TOPPING_SPICE = {stuffing: 'spice', price: 15, calories: 0};

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function(topping) {

}

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function(topping) {

}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function() {

}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function () {

}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function () {

}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function () {

}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function () {

}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException (message = 'No errors!') {
    this.message = message;
    console.log('HamburgerException message:', message);
}


const hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
const hamburgerException = new HamburgerException();

console.log(hamburger);
console.log(hamburgerException);

