// ? Continued ec-07
// ? get & set method in objects
// class Person {
//   #name;
//   constructor(name,age) {
//     this.#name = name;   // Convention: _prefix for "private"
//     this._age = age;
//   }
//   //getter
//   get name() {
//     return this.#name;
//   }
//   //setter
//   set name(newName) {
//     if (newName) {
//       this._name = newName;
//     } else {
//       console.log("New name can't be empty")
//     }
//   }
//   // Added getter for age
//   get age() {
//     return this._age;
//   }

//   // Added setter for age
//   set age(newAge) {
//     if (newAge >= 0) {
//       this._age = newAge;
//     } else {
//       console.log("Age can't be negative");
//     }
//   }
// }
// const person = new Person("Khadim", 23);
// console.log(person.name);
// console.log(person.age);

// person.name = " ";
// console.log(person.name);

// person.age = 5; // Logs: "Age can't be negative"
// console.log(person.age); // Still 23 (unchanged)

// ? Continued Lec-18
// ? Inheritance
// class A {
//   constructor(name) {
//     this.name = name;
//   }

// }
// class B extends A {
//   //* implicitly worked/added by the engine(default constructor)
//   // constructor(...arg) {
//   //   super(...arg);
//   // }

//   getDetais() {
//   return `Here is ${ this.name}`;
// }
// }
// const obj = new B("Shah Momina");
// console.log(obj.getDetais());

// ? How we can make a function private? And how we can access it ?
// class User {
//   #logAccess() {
//     console.log("Private  Logging...");
//   }
//   showProfile() {
//     console.log("Show Profile...");
//     this.#logAccess();
//   }
// }

// const user = new User();
// user.showProfile();
// user.#logAccess();

// ? Multi-level Inheritance is achievable in Js
// class A {
//   sayA() {
//     console.log("Say A");
//   }
// }
// class B extends A {
//   sayB() {
//     console.log("Say B");
//   }
// }
// class C extends B {
//   sayC() {
//     console.log("Say C");
//   }
// }
// const obj = new C();
// obj.sayC();
// obj.sayB();
// obj.sayA();


// ? we don't have direct support for mutiple inheritance in JS, so we achieve them through mixins-Mixins is a function which takes class as an input and returns a new class , with added functionality
class Animal{
  eat() {
    console.log("Eating")
  }
}
const flyable = (Base) =>
  class extends Base {
    fly() {
      console.log("Flying ")
    }
  };
class Bird extends flyable(Animal) {
  bird() {
    console.log("Bird");
    }
};
const myBird = new Bird();
myBird.fly();
myBird.eat();
myBird.bird();