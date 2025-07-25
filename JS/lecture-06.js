// ! Lecture-06
// ? Closure in Javascript

//* outer function and inner function
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = createCounter();   //* we have inner function in our outer function,so it stores in the variable and we call it to get the values of the count
console.log(counter);
console.log(counter());   //* 1st call
console.log(counter());    //* 2nd call
console.log(counter());     //* 3rd call