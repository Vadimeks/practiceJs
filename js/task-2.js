// const me = {
//   name: "Vadzim",
//   age: 39,
// };

// const copyOfMe = me;
// copyOfMe.name = "Vasya";
// console.log(me.name);
// console.log(copyOfMe.name);
// function a() {
//   console.log("hey world");
// }
// a();
// a = 10;
// a();
// const a = () => {
//   console.log("hey world");
// };
// a();
// a = 10;
// const myCity = {
//   city: "Minsk",
//   popular: true,
//   country: "Belarus",
// };
// myCity.popular = "false";
// myCity.size = "bigSize";

// console.log(myCity);
// delete myCity.popular;
// console.log(myCity);

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];
// function findSmallerNumber(numbers) {
//   const minNum = Math.min(...numbers);
//   console.log(minNum);
// }
// findSmallerNumber(numbers);
// const numbers = [2, 5, 35, 56, 12, 1, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (Array.isArray(numbers)) {
//     const minNum = Math.min(...numbers);
//     console.log(minNum);
//   } else {
//     console.log("не масив");
//   }
// }

// findSmallerNumber(numbers);
// findSmallerNumber("not an array");

// Напишіть функцію min(a,b), яка повертає менше чисело з a і b.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "There are not numbers";
//   }

//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(min(6, 6));

// console.log(min(5, 6));
// console.log(min("25", 6));
// console.log(min(25, "text"));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     if (typeof args[i] == "number") {
//       sum += args[i];
//     }
//   }
//   const average = sum / args.length;
//   console.log("Average:", average);
// }

// calculateAverage(10, 20, 30);
// calculateAverage(5, "text", 15);

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sumNeighbourNum(someArr) {
//   let sum = [];
//   for (let i = 0; i < someArr.length - 1; i += 1) {
//     sum.push(someArr[i] + someArr[i + 1]);
//   }
//   return sum;
// }

// const result = sumNeighbourNum(someArr);
// console.log(result);

//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//const array = ['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
// function logItems(array) {
//   let element = 0;
//   let data = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     element += i;
//     data += array[i];
//   }

//   return `${element} - ${data}`;
// }

// console.log(logItems([2, 3, 5, 6, 8, 9]));

// В нас є объект, в якому зберігаються зарплатні
// нашої команди
// Напишіть код для підсумовання всіх зарплат і
// Збережіть його результат в перемінну sum.

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const salary of Object.values(salaries)) {
//   sum += salary;
// }

// console.log(sum);

// -------------------------------------------------
// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1. додати поле mood зі значенням 'happy'
// 2. замінити hobby на 'skydiving'
// 3. замінити значення premium на false
// 4. виводити зміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// Потрібно написати функцію, яка приймає 2 параметри key та obj,
// яка буде перебирати об'єкт
// Якщо у об'єкта є такий ключ - поверне true

// const obj = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };
// console.log(getBool(obj, "name"));

// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2
// треба повертати об'єкт

// const menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };
// console.log(multiplyNumeric(menu));

// Напиши функцію яка приймає массив чисел і повертає новий массив,
// унікальних чисел

// const numbers = [1, 1, 1, 2, 3, 4, 7, 7, 6, 6, 5, 4, 23, 22, 22, 111, 1, 5];

// console.log(uniqueArray(numbers));

// задачка )) чому 4 ?
// const a = [1, 2, 3, 4, 5, 6, 7];
// const b = a.slice(3, 6).push(4);
// console.log("b =", b);
// _________________________________________________________________________________
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   if (callback === deliverPizza) {
//     return deliverPizza(pizzaName);
//   } else if (callback === makePizza) {
//     return makePizza(pizzaName);
//   }
// }
// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }
// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (price) {
//     totalPrice += price;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// function filterArray(numbers, value) {
//   let num2 = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       num2.push(number);
//     }
//   });

//   return num2;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// Дано число. Выведите в консоль первую цифру этого числа.
// const a = 120344;
// console.log(String(a)[0]);
// Дано число. Выведите в консоль последнюю цифру этого числа.
// const a = 120344;
// console.log(String(a)[String(a).length - 1]);
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// const a = 120344;
// const firstNum = String(a)[0];
// const lastNum = String(a)[String(a).length - 1];
// console.log(Number(firstNum) + Number(lastNum));
// Дано число. Выведите количество цифр в этом числе.
// const a = 120344;
// console.log(String(a).length);
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
// const a = 52545;
// const b = 546464;
// if (String(a)[0] === String(b)[0]) {
//   console.log("ok");
// } else {
//   console.log("not ok");
// }
// function changeEven(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newArray.push(numbers[i] + value);
//     } else {
//       newArray.push(numbers[i]);
//     }
//   }
//   return newArray;
// }

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// const getUsersWithEyeColor = (users, color) => {
//   return (needEye = users.filter((user) => user.eyeColor === color));
// };
// console.log(getUsersWithEyeColor(users, "brown"));
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };
// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const playtimes = players.map((player) => player.playtime / player.gamesPlayed);
// const totalAveragePlaytimePerGame = playtimes.reduce(
//   (previousValue, number) => {
//     return previousValue + number;
//   },
//   0
// );
// const totalAveragePlayTime = totalAveragePlaytimePerGame / playtimes.length;
// console.log(playtimes);
// console.log(totalAveragePlaytimePerGame);
// console.log(totalAveragePlayTime);
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const calculateTotalBalance = (users) => {
//   const userBalance = users.map((user) => user.balance);

//   const totalBalance = userBalance.reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 0);
//   return totalBalance;
// };

// console.log(calculateTotalBalance(users));
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = books.toSorted((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
// console.log(sortedByDescentingRating);
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((a, b) => a.localeCompare(b));
// console.log(names);
