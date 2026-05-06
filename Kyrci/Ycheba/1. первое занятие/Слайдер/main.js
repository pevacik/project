const slider = document.querySelector('.slider');
const arrowLeft = slider.querySelector('.arrow_left');
const arrowRight = slider.querySelector('.arrow_right');
const sliderWrapper = slider.querySelector('.slider_wrapper');
const slides = sliderWrapper.querySelectorAll('.slide');

const countSlides = 1;

const sliderWidth = slider.offsetWidth;

const slideWidth = sliderWidth / countSlides;

slides.forEach(element => {
    element.style.minWidth = slideWidth + 'px';
});

let position = 0;
let step = 1;

arrowLeft.addEventListener('click', () => {
    if(step == 1) return;

    step = step - 1;

    position = position + slideWidth;
    sliderWrapper.style.transform = `translateX(${position}px)`;
});
arrowRight.addEventListener('click', () => {
    if(step >= slides.length - (countSlides - 1)) return;

    step = step + 1;

    position = position - slideWidth;
    sliderWrapper.style.transform = `translateX(${position}px)`;
});