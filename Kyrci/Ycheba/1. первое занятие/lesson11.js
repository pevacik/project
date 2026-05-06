// const heading = document.querySelector('h1');
const button = document.querySelector('button')
// button.innerText = 'отправить';
const input = document.querySelector('input');
const select = document.querySelector('select');
const heading = document.querySelector('.heading');

// heading.addEventListener('click', function () {
//     heading.style.color = 'blue';
// });

// button.addEventListener('click', () => {
//     if (button.innerText == 'Скрыть') {
//         button.innerText = 'Показать';
//         heading.hidden = true;
//     } else if (button.innerText == 'Показать') {
//         button.innerText = 'Скрыть';
//         heading.hidden = false;
//     }    

// });


select.addEventListener('change', () => {
    heading.innerText = select.value;
});



