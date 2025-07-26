// ! Lecture-07
// ? Classes,Objects and getters/setters in Js

// * Objects: Our data containers
// const Person = {
//     name: "Khadim",
//     age:23,
// }

// *  Classes: Blueprints for Objects (ES6)
class Person{
    constructor(name,age) {
        this.name = name;
           this.age = age;
    }
}
//* As the object is created(Memory allocated to it), the constructor function executes/calls at that time,immediately

// const person = new Person("Khadim");
// console.log(person.name);

//* On updating it, we get a new name
// person.name = "Anas";
// console.log(person.name);

//* That's actually is not a good practice to update a property of an object; Rather we use set and get methods
//* We are able to modify name value very easily like this,

// ? get & set method in objects
class Person{
    constructor(name) {
        this._name = name;   // Convention: _prefix for "private"
        this._age = newAge;
    }
        //getter
    get name() {
        return this._name;
    }
       //setter
    set name(newName) {
        if (newName) {
         this._name = newName;
        } else {
            console.log("New name can't be empty")
        }
    }
}
const person = new Person("Khadim",23);
console.log(person.name);
console.log(person.age);

person.name = "";
console.log(person.name);