// ! Lecture-19
// ? Understanding set and map objects in JavaScript

//? set is a built-in object in JavaScript, that stores only unique values and automatically removes duplicates. It maintains Insertion-order.

const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet.has(40));        //* true  (40 exists in the Set)
console.log(mySet.delete(40));     //*  true  (successfully removed 40)

console.log(mySet.has(40));        //* false  (40 not exists in the Set)

mySet.add(20);
mySet.add(60);
console.log(mySet);
console.log(mySet.size);

// ? set and map are iterable objects
for (let val of mySet) {
    console.log(val);
}

// * we get unique values in our array by set method
const tags = ["js", "html", "css", "html", "css"];
const uniqueTags = new Set(tags);

console.log(uniqueTags);
console.log(typeof uniqueTags);

//? map is an object with key-value pairs, that stores any data-type as values and insertion-order is preserved

const map = new Map();
map.set("name", "Ali")
map.set("age", 23)
console.log(map.get("name"));

console.log(map.size);

console.log(map.has("age"));        //true
console.log(map.delete("name"));     //true

console.log(map);

// ? set and map are iterable objects
for (let [key,value] of map) {
    console.log(key,value);
}

const userScore = new Map();
userScore.set("Ali", 98);
userScore.set("Umar", 90);
userScore.set("Ali", 85);
userScore.set("Hamza", 75);

console.log(userScore);
//* insertion - order is preserved
// * Ali scores will be replaced by scores that come last





