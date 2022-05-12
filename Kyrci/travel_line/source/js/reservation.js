// main_luxury
const reservation_button = document.querySelector(".button-reservation");
const popup_visual = document.getElementById("main_luxury--remove");
const visuality = document.getElementById("main_luxury_js");

reservation_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("новая страница не открывается");
  visuality.style.opacity = "0.4";
  popup_visual.style.display = "flex";
  console.log("поменяли");
});

// duplex
const reservation_button2 = document.querySelector(".button-reservation2");
const popup_visual2 = document.getElementById("duplex--remove");
const visuality2 = document.getElementById("duplex_js");

reservation_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("новая страница не открывается");
  visuality2.style.opacity = "0.4";
  popup_visual2.style.display = "flex";
  console.log("поменяли");
});

// buisnes_luxury
const reservation_button3 = document.querySelector(".button-reservation3");
const popup_visual3 = document.getElementById("buisnes_luxury--remove");
const visuality3 = document.getElementById("buisnes_luxury_js");

reservation_button3.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("новая страница не открывается");
  visuality3.style.opacity = "0.4";
  popup_visual3.style.display = "flex";
  console.log("поменяли");
});
