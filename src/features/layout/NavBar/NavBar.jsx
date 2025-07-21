import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


const NavBar = ({isLogged, username, handleLogout}) => {

    const nav = useNavigate();

    return (
        <div id='nav-bar-container'>
            <button onClick={() => { nav(-1) }}> Back </button>
            {!isLogged && <Link to={"/login"}>  Login </Link>            }
            {!isLogged && <Link to={"/register"}>  Register </Link>}
            <Link to={"/products"}>  Products </Link>
            <Link to={"/home"}>  Home </Link>

            {isLogged && <p> Welcome {username}
                <button onClick={handleLogout}> Logout! </button>
            </p>}
        </div>
    )
}

export default NavBar