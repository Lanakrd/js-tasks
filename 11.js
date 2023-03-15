/*Задание 1
Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов остаточного массива меньше 2, то вторая переменная должна стать равна "alex".*/

const names = ["Lana", "Anna", "Kirill", "Maxim", "Victor"];

const [first, second, ...rest] = names;

console.log(first);
console.log(second);

if (rest.length < 2) {
  var second = "alex";
}

rest.forEach(name => {
  console.log(name);
});

console.log(second);

/*Задание 2
Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива.*/

const names = ["Lana", "Anna", "Kirill", "Maxim", "Victor"];

function names1([firstName, secondName, thirdName]) {
  console.log(firstName);
  console.log(secondName);
  console.log(thirdName);
   }

  names1(arrNames)
  
   function names2(arr) {
  let [firstName, secondName, thirdName] = arr;
  console.log(firstName);
  сonsole.log(secondName);
  console.log(thirdName);
  }

  names2(arrNames)


/*Задание 3
Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields.
 */

const obj = {
    field1: "value1",
    field2: "value2",
    field3: "value3",
    field4: "value4"
  };
  
  let { field1 = 1, field2 = 2, ...fields } = obj;
  
  console.log(field1); 
  console.log(field2); 
  console.log(fields);
