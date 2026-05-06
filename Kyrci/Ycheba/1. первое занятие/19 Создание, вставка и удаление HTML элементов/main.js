// const btn = document.querySelector('button');
// const heading = document.querySelector('.heading')


// btn.addEventListener('click', () => {
//     if (heading.classList.contains('active')) {
//         btn.innerText = 'показать'
//         // heading.classList.remove('active')
//     }
//     else {
//         btn.innerText = 'скрыть'
//         // heading.classList.add('active')
//     }

//     heading.classList.toggle('active')

// })

// // const btn = document.querySelector('.button_add_block');
// const MainHeading = document.querySelector('.input_heading');
// const descrip = document.querySelector('.input_description');
// const row = document.querySelector('.row');
// const div = document.querySelector('.col-4');
// const btnPic = document.querySelectorAll('.button_add_image');

// btnPic.forEach(item => {
//     console.log(item);

//     item.addEventListener('click', (event) => {
//         event.preventDefault(false)

//         // item = item.textContent.trim().toLowerCase();

//         if (item.innerText === 'Добавить Картинку') {
//             item.innerText = 'Добавить Картинку'
//             addPic(item.getAttribute('data-src'))
//         } else {
//             item.innerText = 'Удалить Картинку'
//             row.removeChild(div)
//         }
//     })
// })

// btn.addEventListener('click', (event) => {
//     event.preventDefault(false)
//     categoryCreate(MainHeading.value, descrip.value);

//     MainHeading.value = '';
//     descrip.value = '';
// })


// function categoryCreate(heading, description) {

//     const div = document.createElement('div');
//     div.classList.add('col-4');

//     const h3 = document.createElement('h3');
//     h3.innerText = heading;

//     const p = document.createElement('p');
//     p.innerText = description;

//     const button = document.createElement('button');
//     button.classList.add('button_delete_block', 'button');
//     button.innerText = 'Удалить';
//     button.addEventListener('click', () => {
//         row.removeChild(div);
//     })

//     div.append(h3, p, button);
//     row.append(div);

// }


const btn = document.querySelectorAll('.task_content button');
const container = document.querySelector('.task_content');

// const img = document.querySelectorAll('.task_content img');

// btn.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log(item.dataset.src);
//         const img = document.createElement('img');
//         img.setAttribute('src', item.dataset.src);
//         container.append(img);
//     })
// })

btn.forEach(item => {
    item.addEventListener('click', () => {
        const targetSrc = item.dataset.src;
        const images = container.querySelectorAll('img');
        let found = false;

        // Поиск существующего изображения
        images.forEach(img => {
            if (img.getAttribute('src') === targetSrc) {
                img.remove(); // Удаляем изображение
                found = true;
            }
        });

        // Если изображения не было - создаём новое
        if (!found) {
            const newImg = document.createElement('img');
            newImg.setAttribute('src', targetSrc);
            container.append(newImg);
            console.log(newImg.getAttribute('src'));
        }
    });
});