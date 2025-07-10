import { useForm } from 'react-hook-form'

const SmartForm = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({ defaultValues: { name: 'yakov' } })

    const myHandleSubmit = (data) => {
        // alert("form submitted")
        console.log(data);
        alert(`Thank you ${data.name}`)
    }

    return (
        <div>
            <h2> Smart form using useForm  (react-hook-form)</h2>

            <form onSubmit={handleSubmit(myHandleSubmit)}>
                <input  {...register("name", {
                    required: "Name is required!",
                    pattern: {
                        //       ori@gmail.com
                        value: /^\S+@\S+\.\S+$/,
                        message: "wrong template",
                    }
                })}
                    placeholder='name' />
                <br />
                <input {...register("password", {
                    pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
                        message: "Password must be at least 6 characters long and include at least one uppercase letter and one digit"
                    }
                })} placeholder='password' type='password' />


                <button> OK </button>
                {errors.name && <p className='err'> {errors.name.message} </p>}
                {errors.password && <p className='err'> {errors.password.message} </p>}
            </form>

            <button onClick={() => {
                console.log(watch());
            }}> show entered data </button>

            <button onClick={() => reset()}> Reset Fields </button>
        </div>
    )
}

export default SmartForm