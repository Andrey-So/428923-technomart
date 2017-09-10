var aboutlink = document.querySelector(".contacts-button");
var aboutpopup = document.querySelector(".popup-about");
var aboutclose = aboutpopup.querySelector(".popup-about-close");

var maplink = document.querySelector(".services-contacts img");
var mappopup = document.querySelector(".popup-map");
var mapclose = mappopup.querySelector(".popup-map-close");

var basketlink = [].slice.call(document.querySelectorAll(".buy__btn"));
var basketpopup = document.querySelector(".popup-basket");
var basketclose = [].slice.call(basketpopup.querySelectorAll(".js-close"));
    console.log("Запуск");

aboutlink.addEventListener("click", function(evt) {
  evt.preventDefault();
  aboutpopup.classList.remove("popup-invisible");
});

aboutclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  aboutpopup.classList.add("popup-invisible");
});

maplink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.remove("popup-invisible");
});

mapclose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mappopup.classList.add("popup-invisible");
});

basketlink.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    console.log("Клик");
    evt.preventDefault();
    basketpopup.classList.remove("popup-invisible");
});
});

basketclose.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    console.log("Закрыть");
    evt.preventDefault();
    basketpopup.classList.add("popup-invisible");
  });
});
