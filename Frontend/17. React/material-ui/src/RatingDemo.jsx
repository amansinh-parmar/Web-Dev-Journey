import Rating from "@mui/material/Rating"

import { useState } from "react"

export default function RatingDemo(){
    const [score, setScore] = useState(3)


    return (
        <div style={{margin: "0 auto", textAlign:"center"}}>
            <h3>Rating Demo. Current Score : {score}</h3>
            <Rating 
                name = "simple-controlled"
                value = {score}
                onChange = {( event, newValue) => {
                    setScore(newValue)
                }}
            />
        </div>
    )
}