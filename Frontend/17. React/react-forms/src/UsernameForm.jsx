import { useState } from "react"

export default function UsernameForm(){
    const [username, setUsername] = useState("")
    const updateUsername = (evt) => {
        setUsername(evt.target.value)
    }

    return (
        <form>
            <div className="Username">
                <label htmlFor="username">Enter a username </label>
                <input 
                type="text" 
                placeholder="username" 
                value={username}
                onChange={updateUsername}
                id="username"
                />
            </div>
            <div className="Password">
                <label>Password</label>
                <input type="password" name="" id="" />
            </div>

            <button>Submit</button>
        </form>
    )
}