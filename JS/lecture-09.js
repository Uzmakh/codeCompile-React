// ! Lecture-09
// ? Optional Chaining(?.)
// ? Nullish Coalescing(??)
// ? Logical OR(||)

// ? Optional Chaining(?.)
// const User = {
//     name: "Umar",
// address:{
//     city: "Wah",
//     pinCode:11066
// },
// getData: function () {
//     return this.name;
// },
// preferences: null,
// }

// const city = User.address.city;
// console.log(city);

// * But if you are not sure of nested object, how can you access a specific key-value;
// * you can't access it but can avoid errors in console, and simply get undefined.

// const city = User?.address?.city;
// console.log(city);

// console.log(User.getData?.());

// ? Nullish Coalescing(??)
// * if any property is null or undefined,
// * set default value after nullish coalescing
// const prefs = User.preferences ?? "No preferences set";
// console.log(prefs);

// * you can do this with optional chaining also
// const city = User?.address?.city ?? "Lahore";
// console.log(city);

// ? Logical OR(||)
// * when value is 0, empty, false, undefined or null, you can apply/use OR operator to avoid falsy value

// const quantity = 0;
// const result = quantity || 10;
// console.log(result);