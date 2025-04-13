// Задача 3. Перевірка спаму
// function checkForSpam(message) {
//   let result = message.toLowerCase();
//   if (result.includes("spam") || result.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
//TODO № 1 з колбеком =====================================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній
// function letMeSeeYourName(callback) {
//   const name = prompt("Please enter your name:");
//   if (name !== "") {
//     callback(name);
//   } else {
//     console.error("You must provide a valid name");
//   }
// }
// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// console.log(letMeSeeYourName(greet));
//TODO № 2 з колбеком ==============================================
//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль
// const makeProduct = (name, price, callback) => {
//   const product = {
//     id: Date.now(),
//     name,
//     price,
//   };
//   callback(product);
// };
// const showProduct = (product) => {
//   console.log(product);
// };

// makeProduct("Fish", 350, showProduct);
// makeProduct("Chicken", 250, showProduct);

// id: Math.random();
// id: new Date();
// id: Date.now();
// id: Math.floor(Math.random() * 100);
// console.log(makeProduct("Fish", 350, showProduct));
// console.log(makeProduct("Chiken", 250, showProduct));
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();
// function callAction(action) {
//   action();
// }

// const item = {
//   getQuatity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuatity.bind(item));
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), яка памятає імя щефа піл час її виклику
// Функція  makeDish має логіровать рядок "<імя шефа> is cooking <dish>"

// function makeShef(shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// }

// const shefCooking = makeShef("Jon");
// shefCooking("dinner");
// shefCooking("chiken");
//TODO: № 5 на перебирання ✅ ==============================================
//Зібрати в allTopics масив всіх предметів всіх курсів
//Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];
// const allTopics = courses.flatMap((course) => course.topics);
// const uniqueTopics = allTopics.filter(
//   (topic, index, array) => array.indexOf(topic) === index
// );
// console.log(allTopics);
// console.log(uniqueTopics);
//TODO: № 6 на функцію конструктор ✅ =============================================
//Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
// function User({ userName, age, numbersOfPost }) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function () {};
// }

// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();
//TODO:№ 9 на class-и ✅ =============================================
//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = '"mango@gmail.com"';
// console.log(client.getClientData.email);

//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.
