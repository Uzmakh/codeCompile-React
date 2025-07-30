// ! Lecture-10
// ? Destructuring

// * Object Destructuring

const User = {
  name: "Umar",
  age: 34,
  location: "Multan", // ❌ Conflicts with window.location
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

// * if the property not given in the object,you may set its default value,
const { email = "Not provided" } = User;
console.log(email);

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
