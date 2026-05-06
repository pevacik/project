const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');
const slide = document.querySelectorAll('.slide');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let count = 0;
let step = 1;
const sliderPrview = 2
const sliderWith = slider.clientWidth / sliderPrview;

console.dir(slider)

slide.forEach((item) => {
    item.style.minWidth = sliderWith + 'px';

    // берем ширину слайдера и применяем
})


arrowLeft.addEventListener('click', () => {
    if (step <= 1) {
        return
    }
    count += sliderWith
    step--

    sliderWrapper.style.transform = 'translateX(' + count + 'px)'
})

arrowRight.addEventListener('click', () => {
    if (step >= slide.length) {
        return
    }
    count -= sliderWith
    step++
    sliderWrapper.style.transform = 'translateX(' + count + 'px)'
})