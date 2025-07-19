// ! Lecture-16
// ? Ternary Operator and Short Circuiting (logical operators)

// ? Ternary Operator
const age = 14;
// * const status = condition ? "display if true" : "display if false"; 
const status = age >= 18 ? "major" : "minor";
console.log(status);

// if (age >= 18) {
//     return "major"

// } else {
//     return "minor"
// }

// ? Short Circuiting (logical operators)

const input = "" || "Default Value";
console.log(input);

const isLoggedIn = false;
isLoggedIn && console.log("WElcome Back!");