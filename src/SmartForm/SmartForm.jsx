import React from 'react'
import { useForm } from 'react-hook-form'

const SmartForm = () => {

    const { register, handleSubmit, reset, watch } = useForm()

    const myHandleSubmit = (data) => {
        // alert("form submitted")
        console.log(data);
        alert(`Thank you ${data.name}`)
    }

    return (
        <div>
            <h2> Smart form using useForm  (react-hook-form)</h2>

            <form onSubmit={handleSubmit(myHandleSubmit)}>
                <input {...register("name")} placeholder='name' />
                <br />
                <input {...register("password")} placeholder='password' type='password' />
                {/* <input  />
                <input  />
                <input  />
                <input  /> */}

                <button> OK </button>
            </form>

            <button onClick={() => {
                console.log(watch());
            }}> show entered data </button>

            <button onClick={()=>reset()}> Reset Fields </button>
        </div>
    )
}

export default SmartForm