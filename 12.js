/*Задание 1
1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
Добавить эти объекты в массив shops.
В итоге должен получиться массив объектов типа:
[{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск'] */

class Shop {
    constructor(title, address) {
      this.title = title;
      this.address = address;
    }
  };

  const green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
const proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

const shops = [green, proStore]; // создаем объекты и добавляем их в массив

const addresses = shops.map(shop => shop.address); //получение массива с адресами магазинов

['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']


/*2 способ */
function Shop(title, address) {
    this.title = title;
    this.address = address;
  }; //Функция-конструктор Shop

  const green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
const proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');

const shops = [green, proStore]; //создание 2 объектов и добавление их в массив

const addresses = shops.map(shop => shop.address); // получение массива с адресами магазинов

['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск'] // переменная addresses содержит массив с адресами магазинов

console.log(shops);
console.log(addresses);
