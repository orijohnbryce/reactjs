import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useContext } from "react";
import { AppContext } from "../../../App";
import { useSelector } from "react-redux";
import { selectCart } from "../../../app/redux/cartSelectors";


const NavBar = ({ handleLogout }) => {

    const nav = useNavigate();
    
    const {isLogged, username} = useContext(AppContext)

    const cart = useSelector(selectCart);

    return (
        <div id='nav-bar-container'>
            <button onClick={() => { nav(-1) }}> Back </button>
            {!isLogged && <Link to={"/login"}>  Login </Link>            }
            {!isLogged && <Link to={"/register"}>  Register </Link>}
            <Link to={"/products"}>  Products </Link>
            <Link to={"/home"}>  Home </Link>
            <Link to={"/cart"}>  cart  ({cart?.length}) </Link>

            {isLogged && <p> Welcome {username}
                <button onClick={handleLogout}> Logout! </button>
            </p>}
        </div>
    )
}

export default NavBar