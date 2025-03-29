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
const myCity = {
  city: "Minsk",
  popular: true,
  country: "Belarus",
};
myCity.popular = "false";
myCity.size = "bigSize";

console.log(myCity);
delete myCity.popular;
console.log(myCity);
