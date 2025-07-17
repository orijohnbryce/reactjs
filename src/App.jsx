import { useEffect, useState } from 'react'
import './App.css'
import Login from './features/auth/Login/Login'
import Register from './features/auth/Register/Register'
import { isTokenValid } from './features/auth/authApi';
import { jwtDecode } from "jwt-decode"

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("")

    useEffect(() => {
        if (isLogged) {
            const token = localStorage.getItem("token");
            const decodedToken = jwtDecode(token)
            setUsername(decodedToken.user.firstName);
            console.log(decodedToken);            
        }
    }, [isLogged])

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            isTokenValid(token).then(isValid => {
                if (isValid) {
                    setIsLogged(true)
                } else {
                    localStorage.removeItem("token");
                }
            })
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLogged(false);
    }

    return (
        <>
            {isLogged && <p> Welcome {username}
                <button onClick={handleLogout}> Logout! </button>
            </p>}

            <Register onSuccess={() => { setIsLogged(true) }} />
            <Login onSuccess={() => { setIsLogged(true) }} />
        </>
    )
}

export default App
