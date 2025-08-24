//! Lecture-24
//! Part-1
// ? Refinement in code of lecture-23
// ? Topic - Memoization

// function slowAdd(a, b) {
//   //  * expensive loop to execute
//   for (let i = 1; i < 1e8; i++) {     //1*(10*8)
//     return a + b;
//   }
// }
// console.time("No Memo");
// console.log(slowAdd(10, 10));
// console.timeEnd("No Memo");

// console.time("No Memo Again");
// console.log(slowAdd(10, 10));
// console.timeEnd("No Memo Again");

// ? Usecase of set & map methods in Memoized function
// function memoizedAdd(a, b) {
//   const cache = new Map();
//   // const cache = {};    //* e.g. 3_4
 
//   return function (a, b) {
//     const key = `${a}_${b}`;
//     // 1. Check if the result is already cached
//     if (cache.has(key)) {
//       return cache.get(key);
//     }
//     // 2. If not, perform the expensive calculation
//     console.log('Calculating new result for:', key);
//     for (let i = 1; i < 1e8; i++) {
//       // Simulate a slow, expensive operation
//      }
//     const result = a + b;
//     // 3. Store the result in the cache for future use
//     cache.set(key.result);
//     // 4. Return the calculated result
//       return result;
   
//   }
// }
// const add = memoizedAdd();

// const cache = {
//     3_4:7
// }

// console.time("With Memo");
// console.log(add(5, 10));
// console.timeEnd("With Memo");

// console.time("With Memo Again");
// console.log(add(5, 10));
// console.timeEnd("With Memo Again");


// Usage
// console.time("First Call (Not Cached)");
// console.log("Result:", memoizedAdd(5, 10));
// console.timeEnd("First Call (Not Cached)");

// console.log("---"); // Separator for clarity

// console.time("Second Call (Cached)");
// console.log("Result:", memoizedAdd(5, 10)); // Same arguments
// console.timeEnd("Second Call (Cached)");

// console.log("---");

// console.time("Third Call (New Calculation)");
// console.log("Result:", memoizedAdd(7, 3)); // New arguments
// console.timeEnd("Third Call (New Calculation)");

// ? Refinement in code of lecture-20
// ? Topic - Event Bubbling

// document.getElementById("grandParent").addEventListener('click', () => {
//   console.log("GrandParent Clicked!")
// });

// document.getElementById("parent").addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log("Parent Clicked!")
// });
// document.getElementById("child").addEventListener('click', (e) => {
//   e.stopPropagation();
//   console.log("Child Clicked!")
// });

//! Part-2
// ! ES6 Modules In JS(Premium Method)

export const add = (a, b) => {
  console.log(a + b);
};
export const multiply = (a, b) => {
  console.log(a * b);
}