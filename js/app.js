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

var login = document.querySelector(".heading-top-login svg");
var login2 = document.querySelector(".heading-top-login .a2");
var loginMobile = document.querySelector(".group-mobile");

var loginFormWrap = document.querySelector(".login-form-wrap");
var loginForm = document.querySelector(".login-form");
if (login) {
  login.addEventListener("click", () => {
    loginFormWrap.classList.add("active");
  });

  // loginMobile.addEventListener("click", () => {
  //   loginFormWrap.classList.add("active");
  // });
  document.addEventListener("click", (e) => {
    if (!loginForm.contains(e.target) && e.target == loginFormWrap) {
      loginFormWrap.classList.remove("active");
    }
  });
}

if (login2) {
  login2.addEventListener("click", () => {
    loginFormWrap.classList.add("active");
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
let flag = 0;

let user = document.querySelector(".heading-top-login .a1");
let logg = document.querySelector(".heading-top-login .a2");
if (localStorage.getItem("userName")) {
  user.innerHTML = localStorage.getItem("userName");
  user.style.display = "block";
  logg.style.display = "none";
}

let log = document.querySelector("#logIn");

if (log) {
  log.addEventListener("click", (e) => {
    let phone = document.querySelector("#loginPhone");
    let pass = document.querySelector("#loginPass");
    let wrong = document.querySelector(".wrong-pass");

    let storedPhone = localStorage.getItem("userPhone");
    let storedPass = localStorage.getItem("userPass");

    if (phone.value == storedPhone && pass.value == storedPass) {
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
    } else {
      e.preventDefault();
      wrong.style.display = "block";
    }
  });
}
let regis = document.querySelector(".regis-btn");

if (regis) {
  regis.addEventListener("click", () => {
    let userName = document.querySelector("#name");
    localStorage.setItem("userName", userName.value);
    let userPhone = document.querySelector("#phone");
    localStorage.setItem("userPhone", userPhone.value);
    let userPass = document.querySelector("#password");
    localStorage.setItem("userPass", userPass.value);
    let userGender = document.querySelector("#gender");
    localStorage.setItem("userGender", userGender.value);
    let userMail = document.querySelector("#email");
    localStorage.setItem("userMail", userMail.value);
    let userDOB = document.querySelector("#dob");
    localStorage.setItem("userDOB", userDOB.value);
    let userAddress = document.querySelector("#address");
    localStorage.setItem("userAddress", userAddress.value);

    let user = document.querySelector(".heading-top-login a");
    alert("Thành công");
    location.reload();
  });
}

let updatePass = document.querySelector(".updatePass");
let newPass = document.querySelector("#newPass");
if (updatePass) {
  updatePass.addEventListener("click", () => {
    localStorage.setItem("userPass", newPass.value);
    alert("Đổi mật khẩu thành công");
  });
}

let dashboardUserName = document.querySelectorAll(".dashboard-user-name");
let logOutBtn = document.querySelectorAll(".log-out-btn");
let nameUser = localStorage.getItem("userName");

if (nameUser) {
  dashboardUserName.forEach((dash) => {
    dash.innerHTML = nameUser;
  });
} else {
  logOutBtn.forEach((btn) => {
    btn.innerHTML = "Đăng nhập";
  });
}

logOutBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerHTML == "Đăng nhập") {
      loginFormWrap.classList.add("active");
    } else {
      localStorage.clear();
      location.reload();
    }
  });
});

var orderButton = document.querySelector("#orders");
var accountButton = document.querySelector("#account");
var anotherElement = document.querySelector(".recent-order-text");
var anotherElement2 = document.querySelector(".account-detail");

if (anotherElement) {
  anotherElement.addEventListener("click", function () {
    orderButton.click();
  });
  anotherElement2.addEventListener("click", function () {
    accountButton.click();
  });
}

let update = document.querySelector(".update-btn");
if (document.querySelector("#cusName")) {
  document.querySelector("#cusName").value = localStorage.getItem("userName");
  document.querySelector("#cusPhone").value = localStorage.getItem("userPhone");
  document.querySelector(".cusGender").value =
    localStorage.getItem("userGender");
  document.querySelector("#cusEmail").value = localStorage.getItem("userMail");
  document.querySelector("#cusDob").value = localStorage.getItem("userDOB");
  document.querySelector("#cusAddress").value =
    localStorage.getItem("userAddress");
}

if (update) {
  update.addEventListener("click", () => {
    let userName = document.querySelector("#cusName");
    localStorage.setItem("userName", userName.value);
    let userPhone = document.querySelector("#cusPhone");
    localStorage.setItem("userPhone", userPhone.value);

    let userGender = document.querySelector(".cusGender");
    localStorage.setItem("userGender", userGender.value);
    let userMail = document.querySelector("#cusEmail");
    localStorage.setItem("userMail", userMail.value);
    let userDOB = document.querySelector("#cusDob");
    localStorage.setItem("userDOB", userDOB.value);
    let userAddress = document.querySelector("#cusAddress");
    localStorage.setItem("userAddress", userAddress.value);
    alert("Thành công");
    let user = document.querySelector(".heading-top-login a");
    if (localStorage.getItem("userName")) {
      user.innerHTML = localStorage.getItem("userName");
    }
  });
}

var uName = document.querySelector(".userNamee");
if (uName) {
  uName.innerHTML = localStorage.getItem("userName");
}
