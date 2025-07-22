// ! Lecture-04
// ? Var,let & const (Best Practices)

// ? var
// var a = 10;
// var a = 20;
// console.log(a);    //redeclared and reassigned

// ? let
// let b = 10;
// b = 50;
// console.log(b);  //can't redeclared but can be reassigned

// ? const
// const c = 10;
// c = 20;
// console.log(a);    //can't be reassigned

// ? Function Scope
// ? var
// function varExample() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x);    //function-scope, so is printed in console,outside of the block where it is declared
// }
// varExample();

// ? Block-scope
//? let
// function letExample() {
//     if (true) {
//         let x = 10;
//         console.log(x);   //block-scope
//     }
//     console.log(x);   //not accessible
// }
// letExample();

// ?? Interview Question
// * functional scope with var-asychronous action performed after 5sec
for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
},5000)
}

// * block scope with let-asychronous action performed after 5sec
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i)
},5000)
}





