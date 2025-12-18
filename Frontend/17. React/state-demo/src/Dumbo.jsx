import { useState } from "react"

function generateGameBoard(){
    console.log('MAKING THE NEW GAME BOARD')
    return Array(5000)
}

export default function Dumbo(){
    const [board, setBoard] = useState(generateGameBoard)
    return (
        <button onClick={() => setBoard("Hello")}>
            Click me to CHANGE THE STATE
            </button>
    )
}