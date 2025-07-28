import { createContext, useEffect, useState } from 'react'
import './App.css'
import { isTokenValid } from './features/auth/authApi';
import { jwtDecode } from "jwt-decode"
import SiteRoutes from './app/SiteRoutes';
import { useNavigate } from 'react-router-dom';
import NavBar from './features/layout/NavBar/NavBar';
import LoadingButton from './components/LoadingButton/LoadingButton';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext()

function App() {
    const nav = useNavigate();

    const [isLogged, setIsLogged] = useState(false);
    const [username, setUsername] = useState("")
    const [cart, setCart] = useState([])  // [{data, amount}, {..}]

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

        const confirm = window.confirm("Are you sure you want to logout?")
        if (confirm) {
            localStorage.removeItem("token");
            setIsLogged(false);
            nav("/login")
        }
    }

    return (
        <>
            <AppContext.Provider value={{ isLogged, setIsLogged, username, cart, setCart }}>


                {/* <LoadingButton onClick={()=>{}} > 
                    רענן נתונים 
                </LoadingButton>
                
                <LoadingButton onClick={()=>{}} loadingText={"..טוען"}> 
                    טען מוצרים
                </LoadingButton> */}
                <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        // Define default options
                        className: 'cool-text',
                        duration: 5000,
                        removeDelay: 1000,
                        style: {
                            background: '#363636',
                            color: "var(--color1)",
                        },

                        // Default options for specific types
                        success: {
                            duration: 3000,
                            iconTheme: {
                                primary: 'green',
                                secondary: 'black',
                            },
                        },
                    }}
                />
                <h1 className='cool-text'> Northwind Trades </h1>
                <NavBar handleLogout={handleLogout} cart={cart} />
                <SiteRoutes />
            </AppContext.Provider>
        </>
    )
}

export default App
