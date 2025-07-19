// ! Lecture-23
// ? Memoization

// ? Memoization is a Performance Optimization Technique, where you store the result of expensive function calls and returns the cached result when the same inputs occur again

// ? Why use Memoization?
// ? speed up performance by avoiding redundant calculations,
// ? useful in heavy computations,recursion, and in React Components(memo)

function slowAdd(a, b) {
        //* expensive loop to execute
    for (let i = 1; 1 < 1e8; i++){
        return a + b;
    }
}
console.time("No Memo");
console.log(slowAdd(10, 10));
console.timeEnd("No Memo");

console.time("No Memo Again");
console.log(slowAdd(10, 10));
console.timeEnd("No Memo Again");

function memoizedAdd(a,b) {
    const cache = {};    //* e.g. 3_4
    const key = `${a}_${b}`;
    if (cache[key]) {
        return cache[key];
    }
   return function(a, b) {
        for (let i = 1; 1 < 1e8; i++){
            const result = a + b;
            cache[key] = result;
            return result;
        }
    }
}
const add = memoizedAdd();

// const cache = {
//     3_4:7
// }

console.time("With Memo");
console.log(add(5, 10));
console.timeEnd("With Memo");

console.time("With Memo Again");
console.log(add(5, 10));
console.timeEnd("With Memo Again");















