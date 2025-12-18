import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    function addOne(){
        setCount(count + 1)
    }
    function addThree(){
        setCount((currentCount) => currentCount + 5)
    }


    return (
        <div>
            <p>Counts : {count}</p>
            <button onClick={addOne}>+1</button>
            {/* <p>Counts : {currentCount}</p> */}
            <button onClick={addThree}>+5</button>
        </div>
    )
}