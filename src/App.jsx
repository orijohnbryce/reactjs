import { useEffect, useState } from 'react'
import './App.css'
import Login from './features/auth/Login/Login'
import Register from './features/auth/Register/Register'
import { isTokenValid } from './features/auth/authApi';
import { jwtDecode } from "jwt-decode"
import SiteRoutes from './app/SiteRoutes';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './features/layout/NavBar/NavBar';

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("")

    const [cart, setCart] = useState([])  // [{data, amount}, {..}]

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
            <NavBar isLogged={isLogged} username={username} handleLogout={handleLogout}/>
            <SiteRoutes 
                onSuccess={() => { setIsLogged(true) }} 
                isLogged={isLogged} 
                cart={cart}
                setCart={setCart}
                />
        </>
    )
}

export default App
