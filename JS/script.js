// ! Some General Checkings

let x = 1;

function func() {
    console.log(x); // undefined-var gets placeholder in memory-heap and calling it before declaration will give it undefined value

    var x = 2;
}

func();    //undefined



// ? checking array matching
console.log([] == ![]);   //true

// ? Practice-1
function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // 1
counter1(); // 2
counter2(); // 1
counter1(); // 3
counter2(); // 2

// ? Practice-2
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);   //[1,2,3,4]

// ? Practice-3
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log("var:", i);   //3,3,3
//     }, 100);
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(() => {
//         console.log("let:", j);    // 0,1,2
//     }, 100);
// }

// ? Practice-4
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};

let addFive = add(2)(3);
console.log(addFive(5));

// ? Practice-5
const arr = [1, 2, 3];
const result = arr.map(num => {
    if (num % 2 === 0) {
        return num * 2;
    }
    arr.push(num + 3);
    return num;
});
console.log("Result:", result);
console.log("Array:", arr);

// ? Practice-6
for (var i = 1; i <4; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}   //whole function will execute 4 times