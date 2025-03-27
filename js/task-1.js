// console.log("hello world");

// let number = Number(prompt("Enter a number"));
// console.log(number);
// ______________________

// 4;
// console.log("🚀 ~ 4:", 4);

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
// ============================

// let number = Number(prompt("Enter a number"));
// number === 10 ? alert("Вірно") : alert("Невірно");
// if (number === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }
// console.log(number);
// ++++++++++++

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min >= 0 && min <= 15) {
//   alert(`${min} входить в першу чверть`);
// } else if (min > 15 && min <= 30) {
//   alert(`${min} входить в другу чверть`);
// } else if (min > 30 && min <= 45) {
//   alert(`${min} входить в третю чверть`);
// } else {
//   alert(`${min} входить в четверту чверть`);
// }

// console.log(timeZone);
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt("Enter number from 1 to 4");
// let result;

// if (["1", "2", "3", "4"].includes(num)) {
//   // Дазволеныя значэнні
//   switch (num) {
//     case "1":
//       result = "зима";
//       break;
//     case "2":
//       result = "весна";
//       break;
//     case "3":
//       result = "літо";
//       break;
//     case "4":
//       result = "осінь";
//       break;
//   }
// } else {
//   result = "Некарэктнае значэнне. Увядзіце лікі ад 1 да 4.";
// }
// console.log(result);
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let i = 0;
// while (i <= 20) {
//   console.log(i);
//   i++;
// }
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i -= 1) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// }
// getNumbers(1, 10);
// getNumbers(5, 55);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"
// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function getEvenNumbers(start, end) {
//   let num = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       num.push(i);
//     }
//   }
//   return num;
// }

// console.log(getEvenNumbers(5, 15)); // Вынік: [8, 10]
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// function checkStorage(storage, item) {

//   if (storage.includes(item.toLowerCase())) {
//     return `${item} is available to order!`;
//   } else {
//     return "Sorry! We are out of stock!";
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (i = 0; i <= array1.length - 1; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray = newArray.push(array1[i]);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }
// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }
// console.log(createReversedArray(12, 85, 37, 4));

// function calculateTax(amount, taxRate = 0.2) {
//   let total = 0;

//   return (total = amount * taxRate);
// }
// console.log(calculateTax(150, 0.5));
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const getAll = [];
//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       getAll.push(product[propName]);
//     }
//   }
//   return getAll;
// }

// console.log(getAllPropValues("price")); // Вынік: [1300, 2700, 400, 1200]
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Radar")); // Вынік: 5200
// console.log(calculateTotalPrice("Scanner")); // Вынік: 8100
// console.log(calculateTotalPrice("Nonexistent")); // Вынік: Product Nonexistent not found!
// function getExtremeScores(scores) {
//   let best = 0;
//   let worst = 0;
//   for (const score of scores) {
//     best = Math.max(...scores);
//     worst = Math.min(...scores);
//   }
//   return `{best:${best}, worst:${worst}}`;
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore);
// console.log(worstScore);
