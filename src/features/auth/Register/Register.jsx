import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import "./Register.css"
import { register as myRegister } from '../authApi'
import { AppContext } from '../../../App'

const Register = () => {

    const {setIsLogged} = useContext(AppContext)
    const { register, handleSubmit } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        }
    })

    const handleRegister = async (data) => {
        try {
            const res = await myRegister(data);
            localStorage.setItem("token", res.data)
            setIsLogged(true);
            
        } catch (error) {
            console.log(error);
            alert("OOPS, Error! retry later")
        }
    }
    return (
        <div id='register-container'>
            <form onSubmit={handleSubmit(handleRegister)}>
                <input {...register("firstName")} placeholder='enter first name' required />
                <input {...register("lastName")} placeholder='enter last name' required />
                <input {...register("email")} placeholder='enter email' type='email' required />
                <input {...register("password")} placeholder='enter password' type='password' required />

                <button> Register </button>
            </form>
        </div>
    )
}

export default Register