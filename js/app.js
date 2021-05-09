// show and hide the profle in header
$(function () {
  // preloader
  $(window).on("load", function () {
    $(".loader").fadeOut();
  });
  // elevator
  $(".elevator").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 1000);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".elevator").fadeIn();
    } else {
      $(".elevator").fadeOut();
    }
  });
});

//fixed menu with js
const img = document.querySelector(".img");
const nav = document.querySelector(".nav");
const menuImg = document.querySelector(".menu-img");
const logoImg = document.querySelector(".fixed-menu .logo-img img");
const profile = document.querySelector(".fixed-menu .profile");
const fixedMenu = document.querySelector(".fixed-menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > nav.offsetHeight) {
    fixedMenu.classList.add("added");
    fixedMenu.style.position = "fixed";
    logoImg.style.display = "block";
  } else {
    fixedMenu.classList.remove("added");
    fixedMenu.style.position = "relative";
    logoImg.style.display = "none";
  }
});
// for responsive
const firstLogo = document.querySelector(".utilities .logo .first-logo");
const secondLogo = document.querySelector(".utilities .logo .second-logo");
if (screen.width <= 880) {
  firstLogo.style.display = "none";
  secondLogo.style.display = "block";
} else if (screen.width >= 880) {
  secondLogo.style.display = "none";
  firstLogo.style.display = "block";
}

// form validation
const inputText = document.querySelector(".form-valid .input-txt");
const email = document.querySelector(".input-email");
const myForm = document.querySelector(".form");
const submitBtn = document.querySelector(".content button");
const message = document.querySelector(".content .message");
const textarea = document.querySelector(".content textarea");
if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    if (inputText.value == "") {
      alert("please fill your name");
      inputText.style.border = "1px solid red";
    } else if (email.value == "") {
      alert("please fill your email");
    } else if (
      inputText.value !== "" &&
      email.value !== "" &&
      textarea.value !== ""
    ) {
      message.style.display = "block";
      inputText.style.border = "1px solid green";
    }
  });
  message.addEventListener("click", function (e) {
    if (e.target.nodeName === "P") {
      e.target.parentElement.remove();
    }
  });
}
