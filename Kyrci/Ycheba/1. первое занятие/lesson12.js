const product_select = document.querySelector('.select_product');
const num_select = document.querySelector('.number_select');
const heading = document.querySelector('h2');
const btn = document.querySelector('button');


// btn.addEventListener('click', () => {
//     heading.innerText = 'Стоимость заказа: ' + +product_select.value * +num_select.value + ' ₽';
// });


btn.addEventListener('click', () => {
    if (product_select.value > 1) {
        if (num_select) {
            if (num_select === Number()) {
                heading.innerText = 'Ошибка, необходимо ввести число';
            } else {
                heading.innerText = 'Стоимость заказа: ' + +product_select.value * +num_select.value + ' ₽';
            }
        } else {
            heading.innerText = 'Ошибка, Вы не ввели количество товаров';
        }
    } else {
        heading.innerText = 'Ошибка, Вы не выбрали товар';
    }
});

