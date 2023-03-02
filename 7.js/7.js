/*1. Написать функцию makeCalculator, которая принимает число x и возвращает функцию, которая возвращает произведение x на 2.*/

function makeCalculator(x) {
    return function() {
      return x * 2;
    }
  }
 console.log(makeCalculator(5)());



/*2. Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.
 let counter1 = makeCounter();
 let counter2 = makeCounter();
 console.log(counter1());
 console.log(counter1());
 console.log(counter2());
*/


function makeCounter() {
  let count = 0;
   return function() {
      return count++
  }
}


/*3. Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false.*/

function startsWith(str1, str2) {
    return str1.startsWith(str2);
  }

  console.log(startsWith("click here", "click")); // true
  console.log(startsWith("click here", "here")); // false
  console.log(startsWith("click here", "coll")); // true


// 4* Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.

const openModalButton = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const modalOverlay = document.getElementById("modal-overlay");
const closeModalButton = document.querySelector(".close");

function openModal() {
  modal.classList.add("active");
  modalOverlay.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
  modalOverlay.classList.remove("active");
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);