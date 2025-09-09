// /*
const h2 = document.getElementById("h2");
const pargraph = document.querySelector("#para");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  h2.style.background = "cadetblue";
  h2.style.color = "#fff";
  pargraph.style.color = "#fff";
  document.body.style.background = "cornflowerblue";
  btn.style.background = "transparent";
  btn.style.color = "#fff";
  btn.style.boxShadow = "1px solid #fff 10px 10px 10px ";
  btn.style.border = "1px solid #fff";
});
// */

const div = document.querySelector(".box");
div.innerText = "JavaScrip";
div.style.fontSize = "1.7rem";
div.style.background = "yellow";
div.style.color = "#000";
const ul = document.createElement("ul");

let skills = ["Basics", "DOM", "Event", "Function"];
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.style.fontSize = "1.2rem";
  li.innerText = skill;
  ul.append(li);
});
div.append(ul);
const newBtn = document.createElement("button");
newBtn.innerText = "New Skill";
div.append(newBtn);

const second = document.querySelectorAll(".box")[1];
second.innerText = "Python";
second.style.fontSize = "1.7rem";

let newUl = document.createElement("ul");
let newSkill = ["Basics", "Function", "Class", "OOPs"];
newSkill.forEach((skill) => {
  let newLi = document.createElement("li");
  newLi.innerText = skill;
  newLi.style.fontSize = "1.2rem";
  newUl.append(newLi);
});

second.append(newUl);
let btn2 = document.createElement("button");
btn2.innerHTML = "New Skill";
second.append(btn2);

const third = document.querySelectorAll(".box")[2];
third.innerText = "Full Stack";
third.style.background = "orange";
third.style.fontSize = "1.7rem";

let allUl = document.createElement("ul");
let allSkill = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
];
allSkill.forEach((skill) => {
  let allLi = document.createElement("li");
  allLi.innerText = skill;
  allLi.style.fontSize = "1.2rem";
  allUl.append(allLi);
});

third.append(allUl);
let allbtn = document.createElement("button");
allbtn.innerHTML = "New Skill";
third.append(allbtn);

const four = document.createElement("div");
four.className = "box";
// const forth = document.getElementsByClassName("new");
four.innerHTML = "Demo";
four.style.fontSize = "1.7rem";
four.style.background = "black";
four.style.color = "lime";

let lu = document.createElement("ul");
let kill = ["Learn", "Practice", "Learn", "Practice"];
kill.forEach((skill) => {
  let il = document.createElement("li");
  il.innerText = skill;
  il.style.fontSize = "1.2rem";
  lu.append(il);
});

four.append(lu);

let btn3 = document.createElement("button");
btn3.innerHTML = "New Skill";
four.append(btn3);

const card = document.createElement("div");
card.className = "card";
card.style.display = "flex";
card.style.justifyContent = "space-evenly";
card.style.gap = "20px";
card.style.background = "plum";

card.append(div, second, third, four);
document.body.append(card);

let handing = document.createElement("h2");
handing.innerText = "Developer Roadmap";
handing.style.textAlign = "center";
document.body.insertBefore(handing, card);
// document.querySelector(".card").before(handing);

// four.remove()

button = document.createElement("button");
button.innerText = "CLICK ME AND LET'S GO TO JS";
button.style.background = "red";
button.style.color = "#fff";
button.style.padding = "12px";
button.style.borderRadius = "12px";
button.style.margin = "auto";

document.body.after(button);

let p = document.createElement("p");
p.className = "title";
/*
let title = document.querySelector(".title");
// title.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequatur sit aliquam consectetur possimus? Molestiae.";
// title.style.background = "purplpe";
document.body.after(p);
four.after(p);
*/
let para = document.querySelector(".text");
// para.style.background = '#000'
para.getAttribute("class");
// para.setAttribute("class", "newText");
para.classList.add("newText");
