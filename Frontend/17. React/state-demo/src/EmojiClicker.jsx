import {v4 as uuidv4} from 'uuid'
import { useState } from "react"

function randomEmojis(){
    const choices = ["😁","😘","😂","😎","🥵","🤡","👽"]
    return choices[Math.floor(Math.random() * choices.length)]
}


export default function EmojiClicker(){
    const [emojis, setEmojis] = useState([{id:uuidv4(), emoji: randomEmojis()}])
    // const [emojis, setEmojis] = useState([{id:uuidv4(), emoji:"👽"}])

    const addEmoji = () => {
        setEmojis((oldEmojis) => 
            [...oldEmojis, {id:uuidv4(), emoji: randomEmojis()}]
    )}

    // Delete the emoji with the specified id
    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter(e => e.id !== id)

        })
    }

    const makeAllHeart = () => {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e)=> {
                return {...e, emoji:'❤️'}
            })
        })
        }
        
        return (
            <div>
            {emojis.map((e)=>(
                <span
                onClick={() => deleteEmoji(e.id)}
                key={e.id}
                style={{fontSize:"4rem", cursor:"pointer"}}>
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeAllHeart}>Make them All HEART</button>
        </div>
    )
}