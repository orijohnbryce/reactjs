import React, { useContext, useState } from 'react'
import { login } from '../authApi';
import { AppContext } from '../../../App';

const Login = ({onSuccess}) => {
    const [email, setEmail] = useState();
    const [pw, setPw] = useState();

    const {setIsLogged} = useContext(AppContext)

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await login({
                email,
                password: pw,
            })
            localStorage.setItem("token", token);
            setIsLogged(true);
        } catch (error) {
            console.log(error);
            alert("error, retry later");
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type='email' required placeholder='email'
                    value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <input type='password' required placeholder='password'
                    value={pw} onChange={(e) => { setPw(e.target.value) }} />

                <button> Login </button>
            </form>
        </div>
    )
}

export default Login