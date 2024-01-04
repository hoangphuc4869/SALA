var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: "#swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});

var bars = document.querySelector(".menu-mobile i.fa-solid.fa-bars-staggered");
var menu = document.querySelector(".menu-mob");
var menuList = document.querySelector(".menu-mob ul");
if (bars) {
  bars.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    if (!menuList.contains(e.target) && e.target != bars) {
      menu.classList.remove("active");
    }
  });
}

var login = document.querySelector(".heading-top-login");
var loginMobile = document.querySelector(".group-mobile");

var loginFormWrap = document.querySelector(".login-form-wrap");
var loginForm = document.querySelector(".login-form");
if (login) {
  login.addEventListener("click", () => {
    loginFormWrap.classList.add("active");
  });
  loginMobile.addEventListener("click", () => {
    loginFormWrap.classList.add("active");
  });
  document.addEventListener("click", (e) => {
    if (!loginForm.contains(e.target) && e.target == loginFormWrap) {
      loginFormWrap.classList.remove("active");
    }
  });
}

var questions = document.querySelectorAll(".question");
if (questions) {
  questions.forEach(function (question) {
    var title = question.querySelector(".questitle");
    var ans = question.querySelector(".answer");
    var icon = question.querySelector("i.fa-light.fa-angle-down");
    title.addEventListener("click", () => {
      ans.classList.toggle("active");
      title.classList.toggle("active");
      if (icon.classList.contains("fa-angle-down")) {
        icon.classList.remove("fa-angle-down");
        icon.classList.add("fa-angle-up");
      } else {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      }
    });
  });
}

var tayNInh = document.querySelector("#tay-ninh");
var cuChi = document.querySelector("#cu-chi");
if (cuChi) {
  cuChi.classList.add("active");
}
if (tayNInh) {
  tayNInh.addEventListener("click", () => {
    document.querySelectorAll(".place-name").forEach(function (e) {
      e.classList.remove("active");
    });

    tayNInh.classList.add("active");
    var Phone = document.querySelector(".place-phone");
    var Mail = document.querySelector(".place-mail");
    var Place = document.querySelector(".place");
    var PlaceTitle = document.querySelector(".place-right-title");
    if (Phone) {
      Phone.innerHTML = "0234314114";
      Mail.innerHTML = "123@gmail.com";
      PlaceTitle.innerHTML = "Tây Ninh";
      Place.innerHTML = "huyện Tây Ninh";
    }
  });

  cuChi.addEventListener("click", () => {
    document.querySelectorAll(".place-name").forEach(function (e) {
      e.classList.remove("active");
    });

    cuChi.classList.add("active");
    var Phone = document.querySelector(".place-phone");
    var Mail = document.querySelector(".place-mail");
    var Place = document.querySelector(".place");
    var PlaceTitle = document.querySelector(".place-right-title");
    if (Phone) {
      Phone.innerHTML = "+84 917 999 999";
      Mail.innerHTML = "123@gmail.com";
      PlaceTitle.innerHTML = "Củ Chi";
      Place.innerHTML = "9 Điện Biên Phủ, phường 7, huyện Củ Chi";
    }
  });
}

let more = document.querySelector(".more-news button");
let current_items = 6;

if (more) {
  more.addEventListener("click", () => {
    let rooms = [...document.querySelectorAll(".new-wrap .news")];
    for (var i = current_items; i < current_items + 6; i++) {
      if (rooms[i]) {
        rooms[i].style.display = "block";
      }
    }
    current_items += 6;
    if (current_items >= rooms.length) {
      more.style.opacity = "0.5";
      more.style.pointerEvents = "none";
    }
  });
}
