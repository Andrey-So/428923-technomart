var aboutlink = document.querySelector(".contacts-button");
var aboutpopup = document.querySelector(".popup-about");
if (aboutpopup) {
var aboutclose = aboutpopup.querySelector(".popup-about-close");
};

var maplink = document.querySelector(".services-contacts img");
var mappopup = document.querySelector(".popup-map");
if (mappopup) {
  var mapclose = mappopup.querySelector(".popup-map-close");
}

var basketlink = [].slice.call(document.querySelectorAll(".buy__btn"));
var basketpopup = document.querySelector(".popup-basket");
if (basketpopup) {
  var basketclose = [].slice.call(basketpopup.querySelectorAll(".js-close"));
};
if (aboutpopup) {
  var login = aboutpopup.querySelector("[name=popup-name]");
};

var basket = document.querySelector(".basket");
var bookmarkslink = [].slice.call(document.querySelectorAll(".bookmarks__btn"));
var bookmarks = document.querySelector(".bookmarks");

var sliderPrev = [].slice.call(document.querySelectorAll(".slider-prev"));
var sliderNext = [].slice.call(document.querySelectorAll(".slider-next"));
var buttonPrev = document.querySelector(".slider-nav__btn.slider-prev");
var buttonNext = document.querySelector(".slider-nav__btn.slider-next");
var firstSlide = document.querySelector(".first-slide");
var secondSlide = document.querySelector(".second-slide");

var firstMenuItem = document.querySelector(".services-menu li:first-child a");
var secondMenuItem = document.querySelector(".services-menu li:nth-child(2) a");
var thirdMenuItem = document.querySelector(".services-menu li:last-child a");

var firstServiceBanner = document.querySelector(".service-delivery");
var secondServiceBanner = document.querySelector(".service-guarantee");
var thirdServiceBannser = document.querySelector(".service-credit");

if (aboutlink) {
    aboutlink.addEventListener("click", function(evt) {
    evt.preventDefault();
    aboutpopup.classList.remove("popup-invisible");
    login.focus();
  });
};

if(aboutclose) {
    aboutclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    aboutpopup.classList.add("popup-invisible");
  });
};

if (maplink) {
    maplink.addEventListener("click", function(evt) {
      evt.preventDefault();
      mappopup.classList.remove("popup-invisible");
    });
};

if (mapclose) {
  mapclose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mappopup.classList.add("popup-invisible");
  });
};

 if (basketlink) {
  basketlink.forEach(function(btn) {
    btn.addEventListener("click", function(evt) {
      evt.preventDefault();
      basketpopup.classList.remove("popup-invisible");
      basket.classList.add("button-not-empty");
    });
  });
};

basketclose.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    console.log("Закрыть");
    evt.preventDefault();
    basketpopup.classList.add("popup-invisible");
  });
});

bookmarkslink.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    bookmarks.classList.add("button-not-empty");
  });
});

sliderPrev.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    console.log("sliderprev");
    evt.preventDefault();
    firstSlide.classList.remove("visually-hidden");
    secondSlide.classList.add("visually-hidden");
    buttonPrev.classList.add("slider-nav-active");
    buttonNext.classList.remove("slider-nav-active");
  });
});

sliderNext.forEach(function(btn) {
  btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    firstSlide.classList.add("visually-hidden");
    secondSlide.classList.remove("visually-hidden");
    buttonPrev.classList.remove("slider-nav-active");
    buttonNext.classList.add("slider-nav-active");
  });
});

if (firstMenuItem) {
  firstMenuItem.addEventListener("click", function(evt) {
    evt.preventDefault();
    firstMenuItem.classList.add("menu-active");
    secondMenuItem.classList.remove("menu-active");
    thirdMenuItem.classList.remove("menu-active");
    firstServiceBanner.classList.remove("visually-hidden");
    secondServiceBanner.classList.add("visually-hidden");
    thirdServiceBannser.classList.add("visually-hidden");
  });
};

if (secondMenuItem) {
  secondMenuItem.addEventListener("click", function(evt) {
    evt.preventDefault();
    firstMenuItem.classList.remove("menu-active");
    secondMenuItem.classList.add("menu-active");
    thirdMenuItem.classList.remove("menu-active");
    firstServiceBanner.classList.add("visually-hidden");
    secondServiceBanner.classList.remove("visually-hidden");
    thirdServiceBannser.classList.add("visually-hidden");
  });
};

if (thirdMenuItem) {
  thirdMenuItem.addEventListener("click", function(evt) {
    evt.preventDefault();
    firstMenuItem.classList.remove("menu-active");
    secondMenuItem.classList.remove("menu-active");
    thirdMenuItem.classList.add("menu-active");
    firstServiceBanner.classList.add("visually-hidden");
    secondServiceBanner.classList.add("visually-hidden");
    thirdServiceBannser.classList.remove("visually-hidden");
  });
};
