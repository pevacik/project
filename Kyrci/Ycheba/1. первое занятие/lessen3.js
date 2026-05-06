
// задача 1
let coupon = confirm('У вас есть промодкод')
// let product = prompt('Стоимость товара - 1000 рублей');
let price = 1000;
let result;
let procent = 0.85;
// if (product) {
//     result = 'Стоимость заказа - 999 рублей';
// }

// alert(result)

// задача 2

// if (product) {
//     if (Number(product)) {
//         if (product > 0 && product <= 50) {
//             if (product >= 10) {
//                 result = (product * price) * procent
//             } else {
//                 result = product * price
//             }

//         } else {
//             result = ' Ошибка, укажите количество товаров от 1 до 50';
//         }
//     } else {
//         result = 'Ошибка, необходимо ввести число';
//     }
// } else {
//     result = 'Ошибка, Вы не ввели количество товаров';
// };

// alert(result)

// Задача 4

if (coupon == true) {
    let couponName = prompt('Введите ваш купон')
    if (couponName == 'sale200') {
        let product = prompt('Введите количество товара')
        result = (product * price) - 200;
    }
    else {
        result = 'Купон введен не верно'
    }
} else {
    let product = prompt('Стоимость товара - 1000 рублей');
    if (product) {
        if (Number(product)) {
            if (product > 0 && product <= 50) {
                if (product >= 10) {
                    result = (product * price) * procent
                } else {
                    result = product * price
                }

            } else {
                result = ' Ошибка, укажите количество товаров от 1 до 50';
            }
        } else {
            result = 'Ошибка, необходимо ввести число';
        }
    } else {
        result = 'Ошибка, Вы не ввели количество товаров';
    };
};
alert(result)