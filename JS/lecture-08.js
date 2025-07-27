// ! Lecture-08
// ? Working with Objects
// ? How to create Object?

 const Person = {
    name: "Ali",
    age: 34,
    getData: function () {
        return this.name
    }
}
console.log(Person.name);    //Ali
console.log(Person.age);         //34
console.log(Person.getData());    //Ali

// ? Alternate method of creating object
// const Person = new Object();
// Person.name = "Umar";
// console.log(Person);    //the whole object itself
// console.log(typeof Person);    //object
// console.log(Person instanceof Object);     //true

// ? To check the key in object
console.log("name" in Person);
console.log("gender" in Person);
console.log("toString" in Person);

// * to check the key in custom object
console.log(Person.hasOwnProperty("toString"));

// ? To get all key-value pairs in object
// * Looping through for-in
for (let key in Person) {
    console.log(key+":"+Person[key])
}

// ? To get keys in object
console.log(Object.keys(Person));
// ? To get values in object
console.log(Object.values(Person));
// ? To get keys in object
console.log(Object.entries(Person));

// * Looping through for-of
for (const [key, value] of Object.entries(Person)) {
    console.log("Key:", key + ", " + "Value:", value);
}