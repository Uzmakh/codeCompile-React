// ! Lecture-01
//? In this lecture, we are getting the understanding of how the Js code executes, behind the scene?Which phases are there involved in its code execution?
// ? Where do the variables get their placeholders in Memory Heap? Then go to Execution phase...where they are actually assigned values. What happens with the Functions?


var val1 = 10;
var val2 = 5;
function addNum(num1,num2) {
    var sum = num1 + num2;
    return sum;
}
// console.log(addNum(10,5));
var result = addNum(10, 15);
console.log(result);