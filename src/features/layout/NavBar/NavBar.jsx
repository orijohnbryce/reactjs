import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useContext } from "react";
import { AppContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../app/redux/cartSelectors";
import { selectDarkmode } from "../../../app/redux/darkmodeSelectors";
import { toggleDarkmode } from "../../../app/redux/darkmodeSlice";


const NavBar = ({ handleLogout }) => {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const isDark = useSelector(selectDarkmode) ;

    const {isLogged, username} = useContext(AppContext)

    const cart = useSelector(selectCart);

    const handleToggleDarkmode = ()=>{
        dispatch(toggleDarkmode(!isDark))
    }
    console.log(isDark);
    
    return (
        <div id='nav-bar-container' style={{"backgroundColor": isDark ? "black" : "white" }}>
            <button onClick={() => { nav(-1) }}> Back </button>
            {!isLogged && <Link to={"/login"}>  Login </Link>            }
            {!isLogged && <Link to={"/register"}>  Register </Link>}
            <Link to={"/products"}>  Products </Link>
            <Link to={"/home"}>  Home </Link>
            <Link to={"/cart"}>  cart  ({cart?.length}) </Link>

            {isLogged && <p> Welcome {username}
                <button onClick={handleLogout}> Logout! </button>
            </p>}

            <input type="checkbox" checked={isDark} onChange={handleToggleDarkmode}/>
        </div>
    )
}

export default NavBar