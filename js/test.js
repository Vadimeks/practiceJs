// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);
// // const link = document.querySelector(".link");
// // console.log(link.href); // "https://goit.global"
// // link.href = "https://neo.goit.global";
// // console.log(link.href); // "https://neo.goit.global"

// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// const header = document.querySelector("h1");
// header.textContent = "NewTitle";
// header.style.fontSize = "56px";
// header.style.backgroundColor = "tomato";
// console.log(header);

// // const el = document.querySelector(".text");
// // const nested = document.querySelector(".sub-text");
// // console.log(el.textContent); // "Username: Mango"
// // console.log(nested.textContent); // "Mango"
// const el = document.querySelector(".text");
// console.log(el.textContent); // "Username: Mango"
// el.textContent = "Username: Poly";
// console.log(el.textContent);
// //
// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent); // text inside p.article-text

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = "Welcome to Bahamas!";
// //
//
// console.log(link.classList);
// // ["link", "is-active", length: 2, value: "link is-active"]
// const link = document.querySelector(".link");
// const hActiveClass = link.classList.contains("is-active"); // true
// const hasActiveClass = link.classList.contains("title"); // false
// console.log(hActiveClass);
// console.log(hasActiveClass);
// link.classList.add("special");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]
// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");
// const button = document.querySelector(".my-button");
// button.addEventListener("click", () => {
//   console.log("The button was pressed and now the next image will appear");
// });
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);
// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });
// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);
// document.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });
// const registerForm = document.querySelector(".form");

// registerForm.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" || password === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login}, Password: ${password}`);
//   form.reset();
// }
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// descendant.addEventListener("click", () => {
//   console.log("Descendant click handler");
// });
// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   alert(
//     "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// child.addEventListener("click", () => {
//   alert(
//     "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//   );
// });

// descendant.addEventListener("click", (event) => {
//   event.stopPropagation();
//   alert("Descendant click handler");
// });
// const box = document.querySelector("div.box");

// box.addEventListener("click", function (event) {
//   console.log(event.target);
// });
// const colorPalette = document.querySelector(".color-palette");

// colorPalette.addEventListener("click", selectColor);

// function selectColor(event) {
//   console.log(event.target);
//   const selectedColor = event.target.dataset.color;
// }
// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }
// console.log(_); // Весь об'єкт бібліотеки Lodash
// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]

// function congratsIfMoreThan100(users) {
//   if (users.length > 100) {
//     alert("Greets! You have more than 100 subscribers!");
//   } else {
//     alert("Less than 100 yet");
//   }
// }
// const users = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8,
//   9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
//   15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5,
//   6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
//   13, 14, 15, 16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
// ];
// console.log(congratsIfMoreThan100(users));
const obj = {
  name: "Igor",
  sex: "mail",
  age: 18,
};
for (const test in obj) {
  console.log(test);
}
for (const key in obj) {
  console.log(obj[key]);
}
