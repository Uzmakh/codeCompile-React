//! Lecture-13
// ? call(), apply() and bind() methods

const User1 = {
    name: "Ali",
    age:34
}
const User2 = {
    name: "Umar",
    age:27
}

function printDetails(){
     console.log(`Name: ${this.name}, Age:${this.age}`);
}

//  printDetails();   //undefined

//* this-keyword is not able to access any of the object keys; as the function printDetails is outside the object-User1 and/or User2
//* to achieve our goal, of accessing object-values, we use call() or apply() method with this-keyword

function printDetails(city,country) {
    console.log(`Name: ${this.name} Age:${this.age} Location:${city} ${country}`)
}

printDetails.call(User1, "Mumbai", "India");
printDetails.apply(User2, ["Kolkata", "India"]);

//* These two methods invoke the function immediately, with the difference of having items in an array for apply() method
//* Use any of these methods while calling a function to access object-values with this-keyword

printDetails(); //undefined

//* There's still another method to call a function in this scenario; that is bind()

const myDetails = printDetails.bind(User2, "AllahAbad", "India");
console.log(myDetails());
myDetails();

//* bind() method does not invoke the function immediately,rather it returns a new function,storing it in a variable