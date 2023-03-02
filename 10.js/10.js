/* Задание 1
1) Сделать код таск-менеджера из прошлого урока более читаемым, разбив его на отдельные функции.

Например, самый простой вариант: по сабмиту формы после preventDefault должна вызываться функция createLi(text), которая как параметр принимает текст заметки, создает li и наполняет его.*/

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('#ul')

function createLi(text) {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
  input.value = ''
}

function handleSubmit(e) {
  e.preventDefault()
  if (input.value !== '') {
    createLi(input.value)
  }
}

form.addEventListener('submit', handleSubmit)

/* 2) Добавить кнопку, которая помечает все задачи как сделанные.

- Добавить тег button в html код и повесить на него обработчик события clickВ обработчике найти все существующие теги li при помощи функции document.querySelectorAllВ цикле или с помощью forEach обойти найденные в пункте теги li. Каждому проставить li.style.textDecoration = 'line-through';*/

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('#ul')
const doneBtn = document.querySelector('#done-btn')

function createLi(text) {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
  input.value = ''
}

function handleSubmit(e) {
  e.preventDefault()
  if (input.value !== '') {
    createLi(input.value)
  }
}

function markAllDone() {
  const lis = document.querySelectorAll('li')
  lis.forEach(li => {
    li.style.textDecoration = 'line-through'
  })
}

form.addEventListener('submit', handleSubmit)
doneBtn.addEventListener('click', markAllDone)

/*3) Добавить сохранение задач в таск-менеджер, чтобы они сохранялись между перезагрузками страницы.

Основное задание - сохранять сами задачи, без удаления и выделения как сделанные.

Сохранять удаление задач и статус выполнения - необязательно, т.к. это потребует значительной переработки кода. */

const form = document.querySelector('#form')
const input = document.querySelector('#input')
const ul = document.querySelector('#ul')
const doneBtn = document.querySelector('#done-btn')

function createLi(text) {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
  input.value = ''
  saveTasks()
}

function handleSubmit(e) {
  e.preventDefault()
  if (input.value !== '') {
    createLi(input.value)
  }
}

function markAllDone() {
  const lis = document.querySelectorAll('li')
  lis.forEach(li => {
    li.style.textDecoration = 'line-through'
  })
  saveTasks()
}

function saveTasks() {
  const tasks = []
  const lis = document.querySelectorAll('li')
  lis.forEach(li => {
    tasks.push(li.textContent)
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.forEach(task => {
    createLi(task)
  })
}

form.addEventListener('submit', handleSubmit)
doneBtn.addEventListener('click', markAllDone)

loadTasks();

/*Задание 2
1)
Задать объект с полем name.
Задать переменную, которая будет хранить JSON упомянутого объекта.
Задать переменную, которая будет хранить результат парсинга предыдущей переменной. */

const obj = { name: 'Lana Karadag' }
const jsonString = JSON.stringify(obj)
const parsedObj = JSON.parse(jsonString)

/*2) Создать переменную user, в которой хранится объект.
Записать переменную в localStorage.
Создать переменную newUser, в которой будет храниться JS объект из localStorage.*/

const user = { name: 'Lana Karadag', age: 18 }
localStorage.setItem('user', JSON.stringify(user))
const newUser = JSON.parse(localStorage.getItem('user'))

/*Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

Пример реализации:

https://ucarecdn.com/6e689f37-1e6a-4ba1-b9b4-461d9cb4f661/jsbackgallery

ПОДСКАЗКИ
- значение атрибута можно узнать с помощью метода *element.getAttribute(' ');*
- элемент, по которому пришелся клик, =
*event.target*
остальные элементы -
*!event.target*
Порядок работы, если нет своих идей:
1. Собираем изображения в массив.
2. Перебираем массив с изображениями, добавляем на них обработчик клика.
Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является нажатой (на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем ее индекс или url в память и ставим ее на фон body.
При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку. */

const images = document.querySelectorAll('.gallery img')
      let activeIndex = 0

      function setBackground(image) {
        document.body.style.backgroundImage = `url(${image.src})`
        images.forEach((img, index) => {
          if (img === image) {
            img.classList.add('active')
            activeIndex = index
          } else {
            img.classList.remove('active')
          }
        })
        localStorage.setItem('activeIndex', activeIndex)
      }

      images.forEach((img, index) => {
        img.addEventListener('click', () => setBackground(img))
      })

      const activeIndexStr = localStorage.getItem('activeIndex')
      if (activeIndexStr !== null) {
        const savedIndex = parseInt(activeIndexStr)
        if (!isNaN(savedIndex) && savedIndex >= 0 && savedIndex < images.length) {
          setBackground(images[savedIndex])
        }
      } else {
        setBackground(images[0])
      }
