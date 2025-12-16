export default function Slots({val1, val2, val3}){
    const isWinner = val1 === val2 && val1 === val3
    // const 
    return (
        <div>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{Color: isWinner ? "green" : "red"}} >
                {isWinner ? "YOU WIN :)" : "You Lose!!"}
                </h2>
                {isWinner && <h2>Congrats</h2>}
        </div>
    )
}