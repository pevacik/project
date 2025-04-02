
let slides = document.querySelectorAll('.stages-list li');
let uniqueClasses = new Set();

slides.forEach(slide => {
  let classes = slide.classList;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].startsWith('slidess')) {
      uniqueClasses.add(classes[i]);
    }
  }
});

let slideOrder = Array.from(uniqueClasses).sort((a, b) => parseInt(a.slice(-1)) - parseInt(b.slice(-1)));

function findSlidesByOrder(order) {
  let className = slideOrder[order - 1];
  let foundSlides = document.querySelectorAll(`.stages-list li.${className}`);
  return foundSlides;
}

function addClassToSlides() {
  let currentIndex = 0;
  let timer;
  let isCarouselActive = true; // Флаг для отслеживания состояния карусели

  function removeSlidevision2(className) {
    let previousSlidevision2 = document.querySelectorAll(`.stages-list li.${className}.slidevision2`);
    previousSlidevision2.forEach(slide => {
      slide.classList.remove('slidevision2');
      console.log(`Removed slidevision2 from ${className}`);
    });
  }

  function processNextSlide() {
    if (!isCarouselActive) return; // Проверяем флаг перед продолжением

    let currentClassName = slideOrder[currentIndex];
    let foundSlides = document.querySelectorAll(`.stages-list li.${currentClassName}`);

    foundSlides.forEach((slide, index) => {
      setTimeout(() => {
        slide.classList.add('slidevision2');
        console.log(`Added slidevision2 to ${currentClassName}`);
      }, index * 1);
    });

    let previousIndex = currentIndex === 0 ? slideOrder.length - 1 : currentIndex - 1;
    let previousClassName = slideOrder[previousIndex];
    let previousSlides = document.querySelectorAll(`.stages-list li.${previousClassName}.slidevision2`);

    previousSlides.forEach(previousSlide => {
      previousSlide.classList.remove('slidevision2');
      console.log(`Removed slidevision2 from ${previousClassName}`);
    });

    currentIndex = (currentIndex + 1) % slideOrder.length;
  }

  function processPrevSlide() {
    if (!isCarouselActive) return; // Проверяем флаг перед продолжением

    let currentClassName = slideOrder[currentIndex];
    let foundSlides = document.querySelectorAll(`.stages-list li.${currentClassName}`);

    let prevIndex = (currentIndex - 1 + slideOrder.length) % slideOrder.length;
    let prevClassName = slideOrder[prevIndex];
    let prevSlides = document.querySelectorAll(`.stages-list li.${prevClassName}`);

    prevSlides.forEach((slide, index) => {
      setTimeout(() => {
        slide.classList.add('slidevision2');
        // console.log(`Added slidevision2 to ${prevClassName}`);
      }, index * 10);
    });

    let currentSlides = document.querySelectorAll(`.stages-list li.${currentClassName}.slidevision2`);
    currentSlides.forEach(slide => {
      slide.classList.remove('slidevision2');
      // console.log(`Removed slidevision2 from ${currentClassName}`);
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
  // -------------------------------------------------------------
  // булеты
  document.addEventListener('DOMContentLoaded', function () {
    let circles = document.querySelectorAll('.bullets-container svg circle');
    let circlesArray = Array.from(circles);

    console.log('Array of circles:', circlesArray);

    function getCurrentSlide() {
      let activeSlide = document.querySelector('.stages-list li.slidevision2');
      if (activeSlide) {
        let slideIndex = Array.from(activeSlide.classList).find(className => className.startsWith('slidess'));
        console.log('Current Slide:', slideIndex);

        // Изменяем цвет круга в зависимости от текущего слайда
        updateBulletColor(slideIndex);
      } else {
        console.log('No active slide.');
      }
    }

    function updateBulletColor(slideIndex) {
      circlesArray.forEach((circle, index) => {
        let circleSlideIndex = index + 1;
        circle.style.fill = circleSlideIndex === parseInt(slideIndex.slice(-1)) ? '#313131' : '#D9D9D9';
      });
    }

    // Вызываем функцию для отслеживания текущего слайда
    getCurrentSlide();

    // Таймер для обновления цвета булетов
    setInterval(() => {
      getCurrentSlide();
    }, 10); // Измените интервал по необходимости
  });
  // ------------------------------------------------------------
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
  let mediaQuery = window.matchMedia('(max-width: 1360px)');

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



// карсель участников

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll('.members-slide');
  let activSlideElement = document.querySelector('.members-activ-slide');
  let currentIndex = 0;
  let timer;
  let visibleSlides = window.innerWidth >= 1300 ? 3 : 1;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i >= index && i < index + visibleSlides) {
        slide.classList.add('members-active');
      } else {
        slide.classList.remove('members-active');
      }
    });
    updateActivSlide(index + 1);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % (slides.length - visibleSlides + 1);
    showSlide(currentIndex);
    restartTimer();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + (slides.length - visibleSlides + 1)) % (slides.length - visibleSlides + 1);
    showSlide(currentIndex);
    restartTimer();
  }

  function startSlider() {
    timer = setInterval(() => {
      nextSlide();
    }, 4000);
  }

  function restartTimer() {
    clearInterval(timer);
    startSlider();
  }

  function updateActivSlide(index) {
    activSlideElement.textContent = index;
  }

  function handleScreenSizeChange(mediaQuery) {
    if (mediaQuery.matches) {
      if (visibleSlides !== 3) {
        visibleSlides = 3;
        showSlide(currentIndex);
      }
    } else {
      if (visibleSlides !== 1) {
        visibleSlides = 1;
        showSlide(currentIndex);
      }
    }
  }

  let mediaQuery = window.matchMedia('(min-width: 1300px)');

  mediaQuery.addListener(handleScreenSizeChange);

  handleScreenSizeChange(mediaQuery);

  startSlider();

  document.getElementById('next-slide').addEventListener('click', function () {
    nextSlide();
  });

  document.getElementById('prev-slide').addEventListener('click', function () {
    prevSlide();
  });
});
