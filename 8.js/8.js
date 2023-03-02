/*1. Повторите поведение страницы по данному образцу. Координаты должны меняться и зависеть от положения курсора мыши на в области*/

window.addEventListener('mousemove', go);
function go(event) {
    document.getElementById('show').innerHTML = 'X:'+event.clientX+' Y:'+event.clientY;
};	


/*2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали
window.addEventListener('click', go);*/

	
window.addEventListener('click', go);
function go(event) {
    var elem = document.getElementById('show');
    elem.style.left = event.clientX+'px';
    elem.style.top = event.clientY+'px';
};

    /*3. По аналогии со вторым заданием сделайте чтобы центр квадрата помещался в координату области */

    
	window.addEventListener('click', go);
	function go(event) {
		var elem = document.getElementById('show');
		elem.style.left = (event.clientX - parseInt(window.getComputedStyle(elem, "").width) / 2)+'px';
		elem.style.top = (event.clientY  - parseInt(window.getComputedStyle(elem, "").height) / 2)+'px';
	};

    /* 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут*/

     let p = document.querySelector('p');
     let input = document.querySelector('input');
     input.onkeypress = func;

function func (event) {
    let code = event.keyCode;
    let key = String.fromCharCode(event.keyCode);
    p.innerHTML = 'Code: ' + code + ', key ' + key;
};

/*5. Создайте инпут который будет выводить последний элемент введенный в инпут*/

function go(event) {
    document.getElementById('show').innerHTML = String.fromCharCode(event.which);
};

/*6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl. */

let elem = document.getElementById('elem');
elem.addEventListener('click, func');

function func(event) {
    if (event.ctrlKey) {
        elem.style.backgroundColor = 'red';
        console.log('Ctrl pressed');
    }
};

/*7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'. */

let elem = document.getElementById('elem');


function func (event) {
    if(event.ctrlKey) {
        elem.innerHTML ='1'
    };
     if(event.altKey){
        elem.innerHTML = '2'
    }
        if(event.shiftKey) {
            elem.innerHTML = '3'
        }
};
elem.addEventListener('click, func');


/*8. Создайте кнопку и элемент. При нажатии на кнопку, будет скрываться элемент */

const hideBtn = document.querySelector('#hide-btn')
const element = document.querySelector('#element')

hideBtn.addEventListener('click', () => {
  element.classList.toggle('hidden')
});


    /*9.Создайте раскрывающееся меню*/

    let menu = document.querySelector('.menu');
    let title = menu.querySelector('.title');
    function clickDown() {
    menu.classList.toggle('open');
}
    title.addEventListener('click', clickDown)

