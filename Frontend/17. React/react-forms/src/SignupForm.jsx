import { useState } from "react"

export default function SignupForm(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value)
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value)
    }
    const handleSumbit = () => {
        console.log(firstName, lastName)
    }

    return (
        <form>
            <div className="firstname">
                <label htmlFor="firstname">Enter a First Name </label>
                <input 
                type="text" 
                placeholder="firstname" 
                value={firstName}
                onChange={updateFirstName}
                id="firstname"
                />

            {/* <div className="lastname"> */}
                <label htmlFor="lastname">Enter a Last Name </label>
                <input 
                type="text" 
                placeholder="lastname" 
                value={lastName}
                onChange={updateLastName}
                id="lastname"
                />
            <button onClick={handleSumbit}>Submit</button>
            
            </div>

            <div>
            <h2>Employee name is {firstName} and Last name is {lastName}</h2>
            </div>

        </form>
    )
}