// ! Lecture-12
// ? Array Methods

const arr = [
    {
        id: 1,
        name: "John Doe",
        age: 18,
        price: 100
    },
    {
        id: 2,
        name: "Russel Idem",
        age: 22,
        price: 200
    },
    {
        id: 3,
        name: "Diana Milli",
        age: 28,
        price: 400
    },
    {
        id: 4,
        name: "Joseph Bashir",
        age: 34,
        price: 100
    },
    {
        id: 5,
        name: "Franklin Bot",
        age: 36,
        price: 600
    },
];

// ? .map()
// * in regular syntax
const names = arr.map((user) => { return user.name.toUpperCase() });
// * in arrow function
// const names = arr.map((user) => user.name.toUpperCase());

console.log(names);

// ? .filter()
const ages = arr.filter(user => user.age > 25);
console.log(ages);

// * Method Chaining: filter & map used in a chain

const result =
    arr.filter(user => user.age > 20).map(user => user.name.toUpperCase());

console.log(result);


// ? .join()
// * first, you need to define names
const namesString = names.join(", ");
console.log(namesString);

// ?.split()
// * To revert back into array-form
const namesArray = namesString.split(", ");
console.log(namesArray);

// ? .find()
// * It returns the first value that meets the condition
const user = arr.find(user => user.age > 30);
console.log(user);

// ? .findIndex()
const nameIndex = arr.findIndex(user => user.name === "Diana Milli");
console.log(nameIndex);

// ? .reduce()
const total = arr.reduce((sum, item) => sum + item.price, 0);
console.log(total);