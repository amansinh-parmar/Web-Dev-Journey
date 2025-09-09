let newBtn = document.getElementById("newBtn");
let container = document.querySelector(".card");
container.style.display = "flex";

// /*
// Event Listenners
// btn.addEventListener("click", () => {

// Event Handling

// */

// ================ Change Theme ================
let btn = document.getElementById("btn");
let body = document.querySelector("body");
let theme = "light";

btn.addEventListener("click", () => {
  if (theme === "light") {
    theme = "dark";
    // document.querySelector("body").style.background = "#000";
    body.classList.add("dark");
    body.classList.remove("light");
    console.log("DARK THEME");
  } else {
    theme = "light";
    // document.querySelector("body").style.background = "#fff";
    body.classList.add("light");
    body.classList.remove("dark");
    console.log("LIGHT THEME");
  }

//   console.log(theme);
});
