// ! Lecture-05
// ? Arrow function vs Normal function with a deep dive with 'this'-keyword

// greet();   //* we can call functions above their declarations also, as we saw functions are completely Hoisted.
// function greet() {
//     console.log("Hello, Family!");
// }

// ? Arrow Function
//* (Alternative way of defining function)
const greet = () => {
  console.log("Hello, Family!");
};
greet();

//* Another Example of arrow function
const abc = () => "My name is xyz";
const text = abc();
console.log(text);


//? Use of this-keyword in both type of functions
//* Normal function:
// const user = {
//     name: "Shahzor",
//     sayHi: function () {
//         console.log("Hi, ",this.name);
//     },

// }
// user.sayHi();

//* Arrow Function:
name = "Hammad"; //declared as a global variable here outside the object
const user = {
  name: "Shahzor",
  sayHi: () => {
    console.log(`Hi, ${this.name}`); //this has lexical scope-points to window/global; will not access the name within current object
  },
};
user.sayHi();
