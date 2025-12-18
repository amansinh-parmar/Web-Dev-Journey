import { useState } from "react"

export default function Counter(){
    const [num, setNum] = useState(0)
    console.log("COMPONENT HAS BEEN EXECUTED AGAIN!!")
    console.log(`Num : ${num}`)
    const changeNum = ()=>{
        // setNum(num + 1)
        setNum(num + 1)
    }

    return (    
        <div>
            <p>The Counter Number: {num}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}
