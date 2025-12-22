import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    console.log('RESERVED')

    function addOne(){
        setCount(count + 1)
    }

    function setToTen(){
        setCount(10)
    }

    function addThree(){
        setCount((currentCount) => currentCount + 5)
    }

    function restart(){
        setCount(0)
    }

    return (
        <div>
            <p>Counts : {count}</p>
            <button onClick={addOne}>+1</button>
            {/* <p>Counts : {currentCount}</p> */}
            <button onClick={addThree}>+5</button>
            <button onClick={setToTen}>Set to Ten</button>
            <button onClick={restart}>Restart Counts</button>
        </div>
    )
}