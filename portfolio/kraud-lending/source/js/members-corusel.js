
const slides = document.querySelectorAll('.stages-list li');
const uniqueClasses = new Set();

slides.forEach(slide => {
  const classes = slide.classList;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].startsWith('slidess')) {
      uniqueClasses.add(classes[i]);
    }
  }
});

const slideOrder = Array.from(uniqueClasses).sort((a, b) => parseInt(a.slice(-1)) - parseInt(b.slice(-1)));

function findSlidesByOrder(order) {
  const className = slideOrder[order - 1];
  const foundSlides = document.querySelectorAll(`.stages-list li.${className}`);
  return foundSlides;
}

function addClassToSlides() {
  let currentIndex = 0;
  let timer;
  let isCarouselActive = true; // Флаг для отслеживания состояния карусели

  function removeSlidevision2(className) {
    const previousSlidevision2 = document.querySelectorAll(`.stages-list li.${className}.slidevision2`);
    previousSlidevision2.forEach(slide => {
      slide.classList.remove('slidevision2');
      console.log(`Removed slidevision2 from ${className}`);
    });
  }

  function processNextSlide() {
    if (!isCarouselActive) return; // Проверяем флаг перед продолжением

    const currentClassName = slideOrder[currentIndex];
    const foundSlides = document.querySelectorAll(`.stages-list li.${currentClassName}`);

    foundSlides.forEach((slide, index) => {
      setTimeout(() => {
        slide.classList.add('slidevision2');
        console.log(`Added slidevision2 to ${currentClassName}`);
      }, index * 1);
    });

    const previousIndex = currentIndex === 0 ? slideOrder.length - 1 : currentIndex - 1;
    const previousClassName = slideOrder[previousIndex];
    const previousSlides = document.querySelectorAll(`.stages-list li.${previousClassName}.slidevision2`);

    previousSlides.forEach(previousSlide => {
      previousSlide.classList.remove('slidevision2');
      console.log(`Removed slidevision2 from ${previousClassName}`);
    });

    currentIndex = (currentIndex + 1) % slideOrder.length;
  }

  function processPrevSlide() {
    if (!isCarouselActive) return; // Проверяем флаг перед продолжением

    const currentClassName = slideOrder[currentIndex];
    const foundSlides = document.querySelectorAll(`.stages-list li.${currentClassName}`);

    const prevIndex = (currentIndex - 1 + slideOrder.length) % slideOrder.length;
    const prevClassName = slideOrder[prevIndex];
    const prevSlides = document.querySelectorAll(`.stages-list li.${prevClassName}`);

    prevSlides.forEach((slide, index) => {
      setTimeout(() => {
        slide.classList.add('slidevision2');
        console.log(`Added slidevision2 to ${prevClassName}`);
      }, index * 10);
    });

    const currentSlides = document.querySelectorAll(`.stages-list li.${currentClassName}.slidevision2`);
    currentSlides.forEach(slide => {
      slide.classList.remove('slidevision2');
      console.log(`Removed slidevision2 from ${currentClassName}`);
    });

    currentIndex = prevIndex;
  }

  function startTimer() {
    timer = setInterval(() => {
      processNextSlide();
    }, 400000000000);
  }

  function stopTimer() {
    clearInterval(timer);
  }

  function handleScreenSizeChange(mediaQuery) {
    if (mediaQuery.matches) {
      // Экран больше 700px, включаем карусель
      isCarouselActive = true;
      startTimer();
    } else {
      // Экран меньше или равен 700px, выключаем карусель
      isCarouselActive = false;
      stopTimer();
    }
  }

  // Создаем медиа-запрос для отслеживания изменений размера экрана
  const mediaQuery = window.matchMedia('(max-width: 1360px)');

  // Добавляем обработчик изменений размера экрана
  mediaQuery.addListener(handleScreenSizeChange);

  // Инициализируем обработчик при загрузке страницы
  handleScreenSizeChange(mediaQuery);

  document.getElementById('slide-next').addEventListener('click', () => {
    processNextSlide();
  });

  document.getElementById('slide-prev').addEventListener('click', () => {
    processPrevSlide();
  });
}

addClassToSlides();





document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.members-slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('members-active');
      } else {
        slide.classList.remove('members-active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startSlider() {
    setInterval(() => {
      nextSlide();
    }, 4000); // Интервал в миллисекундах между переключениями
  }

  // Запускаем слайдер при загрузке страницы
  startSlider();
});
