const fedbacklink = document.querySelector(".button-contacts");
const modal = document.querySelector(".feedback-modal");
const modalClose = document.querySelector(".modal-close");

fedbacklink.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("новая страница не открывается");
  modal.classList.remove("visually-hidden");
  console.log("добавлен класс как надо");
});

modalClose.addEventListener("click", function () {
  console.log("Клик по кнопке прошел");
  modal.classList.add("visually-hidden");
  console.log("ремув произошел");
});
