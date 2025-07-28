import React, { useContext, useState } from 'react'
import { login } from '../authApi';
import { AppContext } from '../../../App';
import LoadingButton from '../../../components/LoadingButton/LoadingButton';
import { useTranslation } from 'react-i18next';

import "./Login.css"

const Login = ({onSuccess}) => {
    const {setIsLogged} = useContext(AppContext)
    const {t} = useTranslation();

    const [email, setEmail] = useState();
    const [pw, setPw] = useState();


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
                <input type='email' required placeholder={t('email')}
                    value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <input type='password' required placeholder={t('password')}
                    value={pw} onChange={(e) => { setPw(e.target.value) }} />

                <button className='login-btn'> {t('login')} </button>
            </form>                
        </div>
    )
}

export default Login