import React, { useState } from 'react'
import "./Login.css"

const Login = () => {

    const [usrename, setUsername] = useState("");
    const [pw, setPw] = useState("");
    const [termsChecked, setTermsChecked] = useState(false)

    const [errorMsg, setErrorMsg] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!termsChecked){
            // alert("please read and check the terms")
            setErrorMsg("please read and check the terms")
            return;
        } 
        setErrorMsg("")
        console.log(usrename, pw);
    }

    return (
        <div>
            <h1 className='clickable'> Login </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='un'> Username </label>
                <input required value={usrename} onChange={(e) => setUsername(e.target.value)}
                    id='un' type='text' placeholder='username' />
                <br />
                <br />
                <label htmlFor='pw'> Password </label>

                <input required value={pw} onChange={(e) => setPw(e.target.value)}
                    id='pw' type={showPassword ? 'text' : 'password'} placeholder='password' />
                <span className='clickable' onClick={() => setShowPassword(!showPassword)}> {showPassword ? "😎" : "🙈"} </span>

                <br />
                <input id='terms' type='checkbox' onChange={()=>{setTermsChecked(!termsChecked)}} checked={termsChecked} />
                <label htmlFor='terms'> I'v read the terms of use</label>
                <br />
                <br />
                {errorMsg && <p className='err'> {errorMsg}</p>}
                <button> Login </button>
            </form>
        </div>
    )
}

export default Login