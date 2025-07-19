// ! Lecture-17
// ? Boolean Values
//*  0=> false
//*  1=> true

// ? Falsy Values
if (0) console.log("won't run");
if ("") console.log("won't run");
if (null) console.log("won't run");
if (undefined) console.log("won't run");

// ? Truthy Values
if ("Hello") console.log("Runs");
if (23) console.log("Runs");
if (1) console.log("Runs");
if ({}) console.log("Runs");
if ([]) console.log("Runs");

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("string"));
console.log(Boolean(Number));