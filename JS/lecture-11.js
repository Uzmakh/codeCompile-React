//  ! Lecture-11
// ? Shallow Copy & Deep Copy

// * We have an object
const User = {
  name: "Umar",
  address: {
    city: "Wah",
    pinCode: 11066,
  },
};

//* I want to create its copy. There are 2 ways; shallow copy and deep copy;
//* Shallow Copy: 2 methods to do this
// ? Method-1:
// const shallowCopy = Object.assign({}, User);
// ? Method-2:
const shallowCopy = { ...User };


//* Deep Copy
const deepCopy = JSON.parse(JSON.stringify(User));

// * Now if I get any change in original object-User, whether this change will reflect in shallow copy or not
User.address.city = "Okara";

console.log("Shallow Copy :", shallowCopy);
console.log("Shallow Copy :", shallowCopy.address.city);
// * the change in original will also reflect/update in/the shallow bcz their memory reference is the same(they share the same memory reference)

console.log("Deep Copy :", deepCopy);
console.log("Deep Copy :", deepCopy.address.city);
// * the change in original will not reflect/update the deep copy bcz their memory reference is different(they don't share the same memory reference)

