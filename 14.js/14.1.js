/*Создаем переменные для всех кнопок и блоков с контентом*/

const tabs = document.querySelector('.tabs');
const buttons = tabs.querySelectorAll('button');
const tabContents = document.querySelectorAll('.tabcontent');

/* Перебираем все кнопки и вешаем на них обработчик клика*/

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const id = event.target.id + '-content';
    openTab(event, id);
  });
});

/*Описываем функцию openTab, которая показывает блок*/
function openTab(event, id) {
  buttons.forEach(button => {
    button.classList.remove('active');
  });/*Перебираем все кнопки и убираем у них класс active*/

  /* Перебираем все блоки и скрываем их*/

  tabContents.forEach(tabContent => {
    tabContent.style.display = 'none';
  });

  /* Определяем кнопку, по которой кликнули и добавляем ей класс active*/

  const activeButton = event.target;
  activeButton.classList.add('active');

  /* Находим по id блок, связанный с активной кнопкой, и показываем его*/

  const activeTabContent = document.getElementById(id);
  activeTabContent.style.display = 'block';
}