const menuBtn = document.querySelector(".header__menu-btn");
const navigation = document.querySelector(".header__nav");

menuBtn.addEventListener("click", function () {
  navigation.classList.toggle("active");
});
