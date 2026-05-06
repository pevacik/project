const srcImages = 'image-1.jpg; image-2.jpg; image-3.jpg';

const images = srcImages.split('; ');

const img = document.querySelectorAll('img');

const btn = document.querySelector('.button');


btn.addEventListener('click', () => {
    img.forEach((item, index) => {
        item.src = 'img/' + images[index];
        console.log(item.src);
    })
});

