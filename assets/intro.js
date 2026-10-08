const container = document.getElementById("container");
const logo = document.getElementById("logo");
const BOUNCE_DELAY = 500;
const BOUNCE_REPEAT_INTERVAL = 10000;
const REDIRECT_DELAY = 45000;

const EMPTY_PAUSE = 500;
const HOME = "/home.html";
let leaving = false;
let bounceInterval;

function leave() {
  if (leaving) return;
  leaving = true;
  clearInterval(bounceInterval);
  logo.classList.remove("intro-bounce");
  container.classList.add("leaving");
  container.addEventListener("animationend", (event) => {
    if (event.animationName === "scaleOut") {
      setTimeout(() => window.location.assign(HOME), EMPTY_PAUSE);
    }
  });
  setTimeout(() => window.location.assign(HOME), 1100 + EMPTY_PAUSE);
}

container.addEventListener("animationend", (event) => {
  if (event.animationName !== "scaleIn") return;
  setTimeout(() => logo.classList.add("intro-bounce"), BOUNCE_DELAY);
  bounceInterval = setInterval(() => logo.classList.add("intro-bounce"), BOUNCE_REPEAT_INTERVAL);
  setTimeout(leave, REDIRECT_DELAY);
});

logo.addEventListener("click", (event) => {
  event.preventDefault();
  leave();
});

logo.addEventListener("animationend", (event) => {
  if (event.animationName === "bounce") logo.classList.remove("intro-bounce");
});
