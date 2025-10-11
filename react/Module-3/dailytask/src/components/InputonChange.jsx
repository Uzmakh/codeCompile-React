import { useState } from "react";

function InputonChange() {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        // console.log(event);
        // console.log(event.target.value);
        setInput(event.target.value);
    }
    return (<>
        <h1>InputonChange</h1>
        <input type="text" placeholder="Enter your name" onChange={handleChange} />
        <h2>{input}</h2>
    </>)
}
export default InputonChange;