import {useForm} from 'react-hook-form'

function FormDemo(){
    const {
        register,
        handleSumbit,
        formState: { errors },
    } = useForm({ mode: "onChnage" })

    const handleRegistration = (formData) => {
        console.log("FORM SUBMITTED")
        console.log(formData)
    }

    const handleError = (errors) => {}

    const registerOptions = {
        name: { required: "Name cannot be blank"},
        email: { required: "Email cannot be blank"},
        password: {
            required: "Password is required",
            minLength: {
                value: 10,
                message: "Password must be at least 10 characters"
            }
        },
        quantity: {
            required: "Quantity is required",
            min: {
                value: 0,
                message: "Quantity must be greater than 0"
            },
            max: {
                value: 10,
                message: "Quantity must be less than 10"
            }
        }
    }

    return (
        <form onSubmit={handleSumbit(handleRegistration, handleError)}>
            <div>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    {...register("name", registerOptions.name)}
                     />

                <small className="text-danger">
                    {errors?.name && errors.name.message}
                </small>
            </div>

            <div>
                <label>Email</label>
                <input 
                    type="email" 
                    name="email"
                    id=""
                    {...register('email', registerOptions.email)}
                    />
                    <small className="text-danger">
                        {errors?.email && errors.email.message}
                    </small>
            </div>

            <div>
                <label>Password</label>
                <input 
                    type="password" 
                    name="password"
                    id=""
                    {...register('password', registerOptions.password)}
                    />
                    <small className="text-danger">
                        {errors?.password && errors.password.message}
                    </small>
            </div>

            <div>
                <label>Quantity</label>
                <input 
                    type="number" 
                    name="quantity"
                    id=""
                    {...register('quantity', registerOptions.quantity)}
                    />
                    <small className="text-danger">
                        {errors?.quantity && errors.quantity.message}
                    </small>
            </div>


            <button>Submit</button>
        </form>
    )
} 

export default FormDemo;