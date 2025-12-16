// ==>> GET ONLY SINGLE CONDITION
export default function DoubleDice(){
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    const isWinner = num1 === num2
    const style = {color:isWinner ? "green": "red"}

    // Ternary Operator
return (
        <div className="DoubleDice" style={style}>
            <h2>Double Dice</h2>
            {isWinner && <h3>YOU WIN :)</h3>}
            <p>Num 1 : {num1}</p>
            <p>Num 2 : {num2}</p>
        </div>
    )
}

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     // Ternary Operator
// return (
//         <div>
//             <h2>Double Dice</h2>
//             {num1 === num2 ? <h3>YOU WIN :)</h3> : null}
//             <p>Num 1 : {num1}</p>
//             <p>Num 2 : {num2}</p>
//         </div>
//     )
// }


// ==>> ALTERNATIVE OPTIONS WHILE USE SECOND CONDITION
// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     // Ternary Operator
// return (
//         <div>
//             {/* <h2>DOuble Dice</h2> */}
//             <h3>{num1 === num2 ? "YOU WIN :)" : 'YOU LOSE!!'}</h3>
//             <p>Num 1 : {num1}</p>
//             <p>Num 2 : {num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice(){
//     const num1 = Math.floor(Math.random() * 3) + 1
//     const num2 = Math.floor(Math.random() * 3) + 1
//     // Ternary Operator
//     const result = num1 === num2 ? 'YOU WIN :)' : "You Lose!!"
    
// return (
//         <div>
//             <h4>{result}</h4>
//             <p>Num 1 : {num1}</p>
//             <p>Num 2 : {num2}</p>
//         </div>
//     )
// }