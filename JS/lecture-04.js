// ! Lecture-04
// ? Var,let & const (Best Practices)

// ? var
// var a = 10;
// a = 20;
// console.log(a);    //redeclared and reassigned

// ? let
// let a = 10;
// a = 50;
// console.log(a);  //can't redeclared but can be reasigned

// ? const
// const a = 10;
// a = 20;
// console.log(a);    //can't be reassigned

// ? Function Scope
// ? var
// function varExample() {
//     if (true) {
//         var x = 10;
//     }
//     console.log(x);    //function-scope
// }
// varExample();

// ? Block-scope
//? let
// function letExample() {
//     if (true) {
//         let x = 10;
//         // console.log(x);   //block-scope
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





