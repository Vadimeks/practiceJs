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
