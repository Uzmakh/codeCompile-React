// ! Lecture-03
// ? Concept  of HOISTING

//? Example-1 (var hoisting)
// var a;
// console.log(a);
// var a = 10;
// console.log(a);

//? Example-2 (let/const hoisting)
try {
  console.log(b);
} catch (e) {
  console.error(e);
}
// let b=20;
// console.log(b);

//? Example-3 (Function Hoisting)
// greet();   //*function can be called before initialization
// function greet() {
//     console.log("Hello, Wecome lovely family!")
// }

//? Example-4 (Function Expression Hoisting)

// try {
//     heyFun();
// } catch (error) {
//     console.error(error);
// }
//* here it is called before its initialization, and as it is assigned to a variable, variable with var stays on the top of the memory with undefined.
// var heyFun = function heyFun() {
//     console.log("Hello, Welcome lovely family!")
// };
//* when it is declared with let, it stores in TDZ, and throws ReferenceError on calling before initialization.
// let heyFun = function heyFun() {
//     console.log("Hello, Welcome lovely family!")
// };








