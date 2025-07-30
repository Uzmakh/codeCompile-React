// ! Lecture-10
// ? Destructuring

// * Object Destructuring

const User = {
    name: "Umar",
    age: 34,
    location: "Multan",   // ❌ Conflicts with window.location
};

const User1 = User.name;
console.log(User1);

const userAge = User.age;
console.log(userAge);

// * Using Destructing
const { name, age, location: userLocation } = User;
//* Use userLocation instead of location
console.log(User);
console.log(userLocation);

//* If you won't rename the var-location,you will get the error Uncaught SyntaxError: Identifier 'location' has already been declared because location is a reserved global object in browsers(part of the window object).When you try to declare a new variable named location in the global scope, it conflicts with the built -in window.location.

// * if the property not given in the object,you may set its default value,
const { email="Not provided" } = User;
console.log(email)


// * Array Destructuring
const colors = ["red", "pink", "yellow"];

// * Using Destructing
const [firstCol, secondCol] = colors;

console.log(secondCol);


const [, , thirdCol] = colors;
console.log(thirdCol);

//* It's equivalent to:
// const thirdCol = colors[2];
//* Why the commas ?
    // They act as placeholders to skip unwanted elements at specific positions.

