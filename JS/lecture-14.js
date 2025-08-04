// ! Lecture-14
// ? Array Methods - .slice() & .splice()

let cart = ["milk", "bread", "eggs", "biscuits", "juices"];

console.log(cart);
// * slice - to have items as a slice in a new array;doesn't modify the original array
const preview = cart.slice(1, 4);
console.log(preview);

let items = ["pen", "pencil", "notebook", "eraser", "sharpener"];

console.log(items);

// * Splice - to add/remove items
items.splice(2, 1);
console.log(items);

items.splice(2, 3);
console.log(items);

items.splice(2, 2 ,"marker");
console.log(items);

items.splice(2, 2 ,"scale","ruler");
console.log(items);

//* start position, how many items,"items to add/replace"

