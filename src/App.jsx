import { useEffect, useState } from 'react'
import './App.css'
import Login from './features/auth/Login/Login'
import Register from './features/auth/Register/Register'
import { isTokenValid } from './features/auth/authApi';
import { jwtDecode } from "jwt-decode"
import SiteRoutes from './app/SiteRoutes';
import { Link, useNavigate } from 'react-router-dom';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("")

    const nav = useNavigate();

    useEffect(() => {
        if (isLogged) {
            const token = localStorage.getItem("token");
            const decodedToken = jwtDecode(token)
            setUsername(decodedToken.user.firstName);
            console.log(decodedToken);
            nav("/home")
        }
    }, [isLogged])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            isTokenValid(token).then(isValid => {
                if (isValid) {
                    setIsLogged(true)
                    // redirect user to home page
                    nav("/home");
                    return;
                } else {
                    localStorage.removeItem("token");
                    // redirect user to Login
                    nav("/login")
                }
            })
        }
        // redirect user to Login
        nav("/login")

    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
        nav("/login")
    }

    return (
        <>
            <button onClick={() => { nav(-1) }}> Back </button>
            <Link to={"/login"}>  Login </Link>
            <br />
            <Link to={"/register"}>  Register </Link>
            <br />
            <Link to={"/products"}>  Products </Link>

            <SiteRoutes onSuccess={() => { setIsLogged(true) }} isLogged={isLogged} />
            {isLogged && <p> Welcome {username}
                <button onClick={handleLogout}> Logout! </button>
            </p>}

        </>
    )
}

export default App
