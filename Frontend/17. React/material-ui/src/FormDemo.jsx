import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FormDemo(){
    const [name, setName] = useState("")
    const [volume, setVolume] = useState(90)
    const updateName = (e) => {
        setName(e.target.value)
    }

    const handleVolume = (e, newVal) => {
        setVolume(newVal)
    }

    return (
        <Box sx = {{ border: "1px solid grey", p : 2, width: 300, height: 300, margin: "3rem auto", textAlign:"center"}}>
        <div style={{textAlign:"center"}}>
            <h2>Car name is {name}</h2>
            <TextField 
                id="outlined-basic" 
                label="Car Name" 
                variant="outlined"
                placeholder="Ferrari"
                value={name}
                onChange={updateName}
                 />
        </div>

        <div style={{padding:"2rem "}}>
            <span>Volume : {volume}</span>
            <Slider aria-label="Volume" value={volume} onChange={handleVolume}/>
        </div>


      <Button variant="contained" onClick={() => alert('Good Work!')} color='warning'>Contained</Button>

        </Box>
    )
}