import { useState } from "react";

export default function ScoreKeeper({numPlayer = 3, target = 5}){
    const [score, setScore] = useState(new Array(numPlayer).fill(0))

    // const increamentScore = (idx) => {
    //     setScore((prevScore) => {
    //         const copy = [...prevScore]
    //         copy[idx] += 1
    //         return copy;
    //     })
    // }

    const increamentScore = (idx) => {
        setScore((prevScore) => {
            return prevScore.map((score, i) => {
                if(i === idx) return score + 1
                return score
            })
        })
    }

    // Reset Button
    const reset = () => {
        setScore(new Array(numPlayer).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {score.map((score, idx) => {
                    return (
                        <li key={idx}>
                            Player {idx + 1} : {score}
                            <button onClick={() => increamentScore(idx)}>+1</button>
                            {score >= target && "WINNER!"}
                        </li>
                    )   
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}