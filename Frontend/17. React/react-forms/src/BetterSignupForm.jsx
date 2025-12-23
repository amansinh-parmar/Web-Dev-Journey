import { useState } from "react";

export default function BetterSignupForm(){
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        password: ""
    })


    const handleChange = (evt) => {
        const changedField = evt.target.name
        const newValue = evt.target.value
        setFormData((currData) => {
            return {
                ...currData,
                [changedField] : newValue
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

     return (
        <form>
            <div className="firstname">
                <label htmlFor="firstname">Enter a First Name </label>
                <input 
                type="text" 
                placeholder="first name" 
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                id="firstname"
                />

            {/* <div className="lastname"> */}
                <label htmlFor="lastname">Enter a Last Name </label>
                <input 
                type="text" 
                placeholder="last name" 
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastname"
                />

                <label htmlFor="password">Enter Password </label>
                <input 
                type="password" 
                placeholder="password" 
                value={formData.password}
                onChange={handleChange}
                name="password"
                id="password"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>

        <div>
            <h2>Employee Firstname is {formData.firstName}. <br/> Lastname is {formData.lastName}. <br/> PASSWORD IS {formData.password}</h2>
        </div>
        </form>
    )
}