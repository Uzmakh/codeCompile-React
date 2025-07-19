// ! Lecture-18
// ? JS Prototype and Inheritance

//? Few Examples
// let arr = [1, 2, 3];
// console.log(arr.map((item) => item + 1));

/**
 * .map(), .filter(), .find(), .findIndex(), .forEach()
 * These all methods are derived from array-prototype
 * There are certain default methods,present in prototype but we can also add new (customized) methods there also.
 */

// ? How to add a new method in array-prototype?
// * First checked in your file, if not then in prototype
// Array.prototype.sayHello = function () {
//     return "Say Hello ...!"
// }
// console.log(arr.sayHello());
//* We have added sayHello() in array-prototype

//* Still adding another method in protoptype,
// Array.prototype.last = function () {
//     console.log(this);
//     return this[this.length - 1];
// }
// console.log(arr.last());

// ? ProtoType Chain
//* Arr -> Array.prototype -> Object.prototype -> null

// console.log(arr.__proto__);

//* What is __proto__ ?
//* __proto__ is the internal reference from an object to its prototype -> it forms the prototype chain

// * Old Way to create Object
// * it acts like a constructor, as object is created, function is called
function Person(name) {
  this.name = name;
}
// * attatching greet() with prototype of Person-Object
Person.prototype.greet = function () {
  return `Hello, ${this.name}`;
};

const user = new Person("Shazia");
console.log(user.greet());

console.log(user.__proto__);

// ? Using object.create() for inheritance
// ? Difference between Object.create() and Object.assign() methods
// * object.create() creates a new object and sets its prototype to the specified object. It is a clean way to create an object.

const userModule = {
  sayHi: function () {
    return `Hello ${this.name}`;
  },
};

// * now creating a new object user2 by Object.create() method, and call the function sayHi() in this object
// const user2 = Object.create(userModule);

// * if we create shallow copy of user2
const user2 = Object.assign({}, userModule);
// * now it has name property and sayHi( ) function property also

user2.name = "Kishwer";
console.log(user2.sayHi());

// * sayHi( ) doesn't belong to user2 -object, it is the part of userModule and is inherited in user2-object
// * so to achieve inheritance of any key in some other object, you can use Object.create() method. It is a clean method to create inheritance.

// ? Traditional Way - Inheritance
// function Animal() {
//   this.name = name;
// }
// Animal.prototype.walk = function () {
//   return `${this.name} is walking`;
// };

// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   return `${this.name} is barking`;
// };

// const dog = new Dog("Tommy");
// console.log(dog.bark());
// console.log(dog.walk());

// ? Transition to ES6 classes

class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
   return `${this.name} is walking`;
  }
}
class Dog extends Animal {
    bark() {
      return `${this.name} is barking`;
      }
}
const dog = new Dog("Tommy");
console.log(dog.bark());
console.log(dog.walk());

// * Before ES6 , we used constructor functions with new -keyword to create objects. Methods are added to the constructor's prototype so all instances can share them.
