// const numbers = [1024, 1, 25, 81, 520, 219, 4, 15];

// numbers.sort((a, b) => a - b);

// console.log(numbers);
// const numbers2 = [25, 81, 520, 1024, 1, 219, 4, 15];

// numbers2.sort((a, b) => b - a);

// console.log(numbers2);

// const names = ['Михаил', 'Светлана', 'Алексей', 'Виктория', 'Мария', 'Петр', 'Борис'];

// names.sort();

// console.log(names);

// const names2 = ['Михаил', 'Светлана', 'Алексей', 'Виктория', 'Мария', 'Петр', 'Борис'];

// names2.sort((a, b) => {
//     return a > b ? -1 : b > a ? 1 : 0;
// })

// console.log(names2);


// const arr = [54, 'HTML', 'CSS', 100, 'JavaScript', 12, 45];

// const resultArray = arr.filter(item => {
//     // если item не равен числу, то возвращаем данное значение в новый массив resultArray
//     return !Number(item);
// });

// console.log(resultArray);

// const products3 = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ]

// const languages = ['html', 'css', 'javascript', 'php'];
// const value = languages.unshift('react')


// const products = [
//     {
//         name: 'MackBook Air',
//         price: 90000,
//     },
//     {
//         name: 'MackBook Pro 13',
//         price: 120000,
//     },
//     {
//         name: 'MackBook Pro 14',
//         price: 170000,
//     },
//     {
//         name: 'MackBook Pro 16',
//         price: 220000,
//     },
// ];
// // Напишите функцию, которая будет очищать массив от товаров, где стоимость меньше переданному аргументу функции.
// // функция, которая производит фильтрацию массива по стоимости товара
// function filterProducts(arr, price) {
//     const result = arr.filter(
//         item => item.price > price
//     )

//     return result;
// }

// // в массиве должны остаться только те объекты, где стоимость товаров больше 100000
// const resultProducts_1 = filterProducts(products, 100000);
// // в массиве должны остаться только те объекты, где стоимость товаров больше 150000
// const resultProducts_2 = filterProducts(products, 150000);

// // ожидаемый результат
// console.log(resultProducts_1); // [ {...}, {...}, {...} ]
// console.log(resultProducts_2); // [ {...}, {...} ]




// const arr = [54, 'HTML', 'CSS', 100, 'JavaScript', 12, 45];

// const resultArray = arr.filter( item => item !== Number(item) );

// // ожидаемый результат
// console.log(resultArray); // ['HTML', 'CSS', 'JavaScript']


// const names = ['Михаил', 'Светлана', 'Алексей', 'Виктория', 'Мария', 'Петр', 'Борис'];

// names.sort( )

// console.log(names);



// num = [25, 81, 520, 1024, 1, 219, 4, 15];

// const maxNum = Math.max(...num);

// // ожидаемый результат
// console.log(maxNum); // 1024


// function getRandomNumber(maxNum) {
//     const rand = Math.random() * maxNum;
//     return Math.ceil(rand)
// };

// console.log( getRandomNumber(100) ); // вернет рандомное число от 1 до 100
// console.log( getRandomNumber(20) );


// const num1 = 71.57;
// const num2 = 892.12;

// // производим округление чисел
// const resultNum1 = Math.round(num1);
// const resultNum2 = Math.round(num2);

// // ожидаемый результат
// console.log(resultNum1); // 72
// console.log(resultNum2); // 892

// const wrapper = document.querySelector('.wrapper');
// const button = wrapper.querySelector('button');


// button.addEventListener('click', () => {
//     if (button.innerText == "Показать") {
//         const paragraph = document.createElement('p');
//         paragraph.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste mollitia exercitationem labore ex eos, maxime esse quae quibusdam amet tenetur modi similique laboriosam id perspiciatis reprehenderit facilis porro dignissimos sunt?';
//         wrapper.append(paragraph);
//         button.innerText = 'Скрыть';
//     } else {
//         wrapper.querySelector('p').remove();
//         button.innerText = 'Показать';
//     }
// });


// const languages = [
//     {
//         name: 'React',
//         description: 'React - это JavaScript-библиотека для создания пользовательских интерфейсов, особенно интерактивных и динамических веб-приложений, которые можно обновлять без полной перезагрузки страницы. React помогает разработчикам создавать компоненты, которые представляют собой отдельные части интерфейса, и затем их можно объединять в более сложные структуры.'
//     },
//     {
//         name: 'Vue',
//         description: 'Vue - это JavaScript фреймворк для создания пользовательских интерфейсов. Он создан на стандартах HTML, CSS и JavaScript и предоставляет декларативную и компонентную модель программирования, которая помогает эффективно разрабатывать пользовательские интерфейсы любой сложности.'
//     },
//     {
//         name: 'Angular',
//         description: 'Angular - это фреймворк, разработанный компанией Google, используемый для создания веб-приложений, особенно одностраничных (SPA). Он основан на TypeScript и предлагает множество инструментов и функций для упрощения разработки и управления большими проектами.'
//     }
// ];

// function createElement(arr) {
//     arr.forEach(item => {
//         console.log()
//         const div = document.createElement('div');
//         div.classList.add('item');
//         const button = document.createElement('button');

//         button.innerText = item.name;
//         button.addEventListener('click', () => {
//             if (button.classList.contains('active')) {
//                 div.querySelector('p').forEach(item => {
//                     item.remove();
//                 })
//             } else {
//                 button.classList.add('active');
//                 const p = document.createElement('p');
//                 p.innerText = item.description;
//                 div.append(p);
//             }
//             button.classList.remove('active');
//         })
//         div.append(button);
//         wrapper.append(div);
//     })
// }
// function createElement(arr) {
//     arr.forEach(item => {
//         const div = document.createElement('div');
//         div.classList.add('item');

//         const button = document.createElement('button');
//         button.innerText = item.name;

//         // Добавляем обработчик события
//         button.addEventListener('click', () => {
//             // Удаляем все <p> с других кнопок
//             document.querySelectorAll('.item p').forEach(p => p.remove());

//             // Проверяем текущее состояние кнопки
//             if (button.classList.contains('active')) {

//                 // Если активна → удаляем своё описание
//                 button.classList.remove('active');
//                 div.querySelector('p')?.remove(); // Удаляем свой <p>
//             } else {
//                 // Если кнопка НЕ активна → добавляем описание
//                 button.classList.add('active');
//                 const p = document.createElement('p');
//                 p.innerText = item.description;
//                 div.append(p);
//             }
//         });

//         // Добавляем кнопку и контейнер
//         div.append(button);
//         wrapper.append(div);
//     });
// }

// createElement(languages);


// const toDay = new Date();
// console.log(toDay);

// const input = document.querySelector('input');

// input.addEventListener('input', () => {
//     const InpitValue = sessionStorage.setItem('inputValue', input.value);

// })   

// const productName = document.querySelector('.Product_name');
// const productPrice = document.querySelector('.Product_price');
// const addProduct = document.querySelector('.add_product');
// const wrapper = document.querySelector('.wrapper');

// let product = [];




// addProduct.addEventListener('click', () => {
//     wrapper.innerHTML = '';
//     CallStorage(productName.value, productPrice.value);
//     // renderList(productName.value, productPrice.value);
//     storage();
//     productName.value = '';
//     productPrice.value = '';

// })

// // рендер
// function renderList(Name, Price) {
//     this.Name = Name;
//     this.Price = Price;
//     const div = document.createElement('div');
//     const h2 = document.createElement('h2');
//     h2.innerText = Name;
//     const p = document.createElement('p');
//     p.innerText = Price;
//     div.append(h2, p);
//     wrapper.append(div);
// }
// // функция запроса данных из локал и отрисовка
// function storage() {
//     const productPast = JSON.parse(localStorage.getItem('product'));
//     return productPast.forEach(product => renderList(product.name, product.price));
// };

// // функция 
// function CallStorage(nameProduct, priceProduct) {
//     const storedProducts = localStorage.getItem('product');
//     product = storedProducts ? JSON.parse(storedProducts) : [];
//     const newProduct = {
//         name: nameProduct.trim(),
//         price: priceProduct.trim()
//     };
//     product.push(newProduct);
//     localStorage.setItem('product', JSON.stringify(product));
// }


// const btn = document.querySelector('button');
// const wrapper = document.querySelector('.wrapper');


// btn.addEventListener('click', () => {
//     RenderCategory();
// })
// async function RenderCategory() {
//     wrapper.innerHTML = '';

//     try {
//         const response = await fetch('https://server.blasars.ru/api/categories');
//         if (!response.ok) {
//             throw new Error('Не удалось загрузить данные');
//         }
//         const data = await response.json();

//         data.forEach(data => {
//             const div = document.createElement('div');
//             const h2 = document.createElement('h2');
//             h2.innerText = data.name;
//             div.append(h2);
//             wrapper.append(div);
//         });



//     } catch (error) {
//         console.log(error);
//     }
// }


const wrapper = document.querySelector('.wrapper');
const tittle = document.querySelector('.tittle');
const slugCategory = document.querySelector('.slugCategory');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://server-blog.blasars.ru/api/article', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: tittle.value,
            slugCategory: slugCategory.value
        })
    })
        .then(response => response.json())
        .then(data => {

            console.log(data)
            render()
        })



})

async function callResponse() {
    const response = await fetch('https://server-blog.blasars.ru/api/articles/programming/?limit=7')


    const data = await response.json()
    return data.body


}

async function render() {
    wrapper.innerHTML = '';
    const data = await callResponse()
    data.forEach((item) => {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        h2.innerText = item.title;
        div.append(h2);
        wrapper.append(div);
    })


}

render()

