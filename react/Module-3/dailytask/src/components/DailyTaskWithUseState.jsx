import { useState } from "react";

function DailyTaskWithUseState() {
    // ?Undersatanding how does the syntax of state come into being
    //* useState(0);
    //* storing useState in a variable,countArray as useState gives us array of variables
    // const countArray = useState(0);
    // console.log(countArray);   //* [0,f]

    // const firstVal = countArray[0];
    // console.log(firstVal);

    // const secondVal = countArray[1];
    // console.log(secondVal);

    // ? React can't understand Vanilla JS,It understands hooks

    // * To create a state, we had to declare three constants;countArray,firstVal,and secondVal;Rather we can destructure the useState with 2 indices-firstVal and secondVal (Modern JS-ES6)

    const [firstVal, secondVal] = useState(0);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        secondVal(firstVal + 1);
        setCount(count + 1);
    }
    return (<>
        <h1>DailyTaskWithUseState</h1>
        <h2>{firstVal}</h2>
        <h2>{count}</h2>
        <button onClick={handleClick}>Add Task</button>
    </>)
}
export default DailyTaskWithUseState;