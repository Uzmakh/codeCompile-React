//  ! Bonus Lecture-02   ... Continued part of Lecture-11
// ? Shallow Copy 

// * We have an object
const User = {
  name: "Umar",
  address: {
    city: "Wah",
    pinCode: 11066,
  },
};

//* In lecture-11, we saw how to create shallow copy of an object in 2 ways; 
//* Shallow Copy: 2 methods to do this
// ? Method-1:
// const shallowCopy = Object.assign({}, User);
// ? Method-2:
const shallowCopy = { ...User };


// * when we make any change in original object's nested properties,this change aso reflects in shallow copy,as this;
User.address.city = "Okara";

console.log("Shallow Copy :", shallowCopy);
console.log("Shallow Copy :", shallowCopy.address.city);
// * this happens because their memory reference is the same(they share the same memory reference)
// * Now in this lecture, we will see whether the change in top-level property of the original object causes the same change in shallow copy or not.
User.name = "Shan";

console.log("Top-level change in Shallow Copy :", shallowCopy);
console.log("Shallow Copy :", shallowCopy.name);

// * Each object(whether it is main or nested) has its own (separate) memory reference whie the properties in it has the same memory reference as the object itsef,as they are the part of that object.