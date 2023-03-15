/*1.1 Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.*/


function LifeObject(name) {
    this.name = name;
    this.getDescription = function() {
      return "This is a " + this.name;
    };
  }

  /*1.2 Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:

sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств */

class Calculator {
    constructor() {
      this.num1 = parseFloat(prompt("Введите первое число: "));
      this.num2 = parseFloat(prompt("Введите второе число: "));
    }
  
    sum() {
      return this.num1 + this.num2;
    }
  
    mul() {
      return this.num1 * this.num2;
    }
  };

  let calc = new Calculator();
console.log(calc.sum()); // сумма введённых чисел
console.log(calc.mul()); // произведение введённых чисел


2.1 /*Реализовать следующее мини-приложение
https://gist.github.com/zhekixclass 
class Logo {
  constructor(url) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.imgUrl = url;
    this.html = null;
  }

  init() {
    // метод должен создать тег img
    // вложить в него src картинки (this.imgUrl)
    // и записать в this.html
    // + дергаем render

    // + странице должен залится фон черным
  }
  
  render() {
    // метод должен отрисовать изображение (this.html) на странице
    // применить фиксированное позиционирование
    // использовать this.top и this.left для указания позиции
    // использовать this.width для указания ширины
  }

  moveUp() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся ВЫШЕ
    // на 20px
    // + дергаем render
  }
  moveDown() {
    // метод должен изменять top нашего объекта так
    // чтобы элемент передвинулся НИЖЕ
    // на 20px
    // + дергаем render
  }
  moveLeft() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ЛЕВЕЕ
    // на 20px
    // + дергаем render
  }
  moveRight() {
    // метод должен изменять left нашего объекта так
    // чтобы элемент передвинулся ПРАВЕЕ
    // на 20px
    // + дергаем render
  }
}

const imgUrl = 'https://bit.ly/2tcDito';
var mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);

// запускаем наше микро-приложение
mfLogotip.init();

mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
// something else, чтобы всё работало
*/

Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      const img = document.createElement('img');// Создаем элемент img
      img.src = this.imgUrl;
      img.style.width = `${this.width}px`;
  
      
      document.body.style.backgroundColor = 'black';
      img.style.position = 'fixed';
      img.style.top = `${this.top}px`;
      img.style.left = `${this.left}px`; // Задаем стиль
  
      document.body.appendChild(img);// Добавляем элемент на страницу
      this.html = img;// Сохраняем ссылку на элемент в свойстве объекта
  
      this.render();// Отрисовываем элемент
    }
  
    render() {
      this.html.style.top = `${this.top}px`;
      this.html.style.left = `${this.left}px`;
    }

    moveUp() {
      this.top -= 20;
      this.render();
    }
  
    moveDown() {
      this.top += 20;
      this.render();
    }
  
    moveLeft() {
      this.left -= 20;
      this.render();
    }
  
    moveRight() {
      this.left += 20;
      this.render();
    }
  }
  
 
  const imgUrl = 'https://bit.ly/2tcDito';
  const mfLogotip = new Logo(imgUrl);
  mfLogotip.init();  // Создаем объект Logo и вызываем метод init()
  
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();// Вызываем методы объекта Logo для перемещения элемента

 /* 2.2 Добавить к приложению желтый круг (пример ЗДЕСЬ)

  Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.
  
  Сделать по примеру из последнего видео в уроке.*/

  class Circle {
    constructor(size, color) {
      this.top = 0;
      this.left = 0;
      this.size = size;
      this.color = color;
      this.html = null;
    }
  
    init() {
      this.html = document.createElement("div");
      this.html.style.position = "fixed";
      this.html.style.width = `${this.size}px`;
      this.html.style.height = `${this.size}px`;
      this.html.style.borderRadius = "50%";
      this.html.style.backgroundColor = this.color;
      document.body.appendChild(this.html); // создали элемент div, задали ему стили и добавили на страницу
  
      
      this.render();
    }// начальная позиция
  
    render() {
      this.html.style.top = `${this.top}px`;
      this.html.style.left = `${this.left}px`;
    }
  
    moveUp() {
      this.top -= 20;
      this.render();
    }// уменьшили значение top на 20px
  
    moveDown() {
      this.top += 20;
      this.render();
    }// увеличили значение top на 20px
  
    moveLeft() {
      this.left -= 20;
      this.render();
    }// уменьшили значение left на 20px
  
    moveRight() {
      this.left += 20;
      this.render();
    }// увеличили значение left на 20px
  }
  

  const yellowCircle = new Circle(100, "yellow");
  yellowCircle.init();// создаем экземпляр класса Circle 
  
  yellowCircle.moveRight();
  yellowCircle.moveRight();
  yellowCircle.moveRight();
  yellowCircle.moveRight();
  yellowCircle.moveDown();
  yellowCircle.moveDown();
  yellowCircle.moveDown();
  yellowCircle.moveDown(); // вызываем методыкласса Circle 