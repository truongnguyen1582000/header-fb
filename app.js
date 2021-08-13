// handle search animation
const searchEl = document.querySelector(".search");
const containerEl = document.querySelector(".input-container ");
const logoEl = document.querySelector(".logo");
const historyListEl = document.querySelector(".history-search");

searchEl.addEventListener("focus", () => {
  containerEl.classList.add("active");
  logoEl.classList.add("hide");
});

searchEl.addEventListener("blur", () => {
  containerEl.classList.remove("active");
  logoEl.classList.remove("hide");
});

// handle nav center change
const navListEl = document.querySelectorAll(".center-nav__item");

navListEl.forEach((el) => {
  el.addEventListener("click", () => {
    removeActive();
    el.classList.add("center-nav__item--active");
  });
});

const removeActive = () => {
  navListEl.forEach((el) => {
    el.classList.remove("center-nav__item--active");
  });
};
