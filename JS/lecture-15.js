// ! Lecture-15
// ? Spread operator & Rest Operator

// ? spread operator unpacks/spreads the elements from an array or properties of an object

// * Mostly used in array/object cloning and merging
// * And in case of function calling


// * Mostly used in array/object cloning and merging
// * array
const nums = [1, 2, 3];
const copy = [...nums];
const copy1 = [...nums,4];

console.log(copy);
console.log(copy1);
console.log(...copy, ...copy1)   //merging

// * object
const newStudent = {
    name: "Ali",
    age:23
}
const copy2 = { ...newStudent,address:"Multan" };
console.log(copy2);
// console.log(...newStudent, ...copy2)   //TypeError


// * And in case of function calling
function sum(a,b,c) {
    return a + b + c;
}
const values = [1, 2, 3];
console.log(sum(...values));

// ? Rest Operator collects values to form a single array or object

function logAll(...items) {
    console.log(items);
}
logAll("pen", "pencil", "eraser");   //arguments passed

// * one another use case of rest operator:
const [first, ...rest] = [10, 20, 30, 40];
console.log(first, rest);