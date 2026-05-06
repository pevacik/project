const heading = document.querySelector('h1');
// const img = document.querySelector('img')
const hello = prompt('Введите число')

heading.style.color = 'blue';
heading.style.fontSize = '55px';
// img.src = 'img/picture.jpg';
// img.alt = 'Воздушные шары';


// if (hello === "" || !isNaN(Number(hello))) { // Пустая строка ИЛИ число
//   heading.innerText = 'Ошибка, Вы не ввели имя';
// } else {
//   heading.innerText = 'Привет, ' + hello + '!';
// }

if (Number(hello)) {
    heading.style.fontSize = hello + 'px'
}
else {
    heading.style.fontSize = '22px';
}

// console.log(heading)