import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { useContext } from "react";
import { AppContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../../app/redux/cartSelectors";
import { selectDarkmode } from "../../../app/redux/darkmodeSelectors";
import { toggleDarkmode } from "../../../app/redux/darkmodeSlice";
import arrowIcon from "../../../media/icons/back-arrow.png"
import { useTranslation } from "react-i18next";
import LangSelector from "../../../components/LangSelector/LangSelector";

const NavBar = ({ handleLogout }) => {
    
    const {t} = useTranslation()
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
            <button className="back-btn" onClick={() => { nav(-1) }}> 
                <img className="icon" src={arrowIcon}/>
                Back </button>
            {!isLogged && <Link to={"/login"}>  Login </Link>            }
            {!isLogged && <Link to={"/register"}>  Register </Link>}
            <Link className="cool-text" to={"/products"}>  Products </Link>
            <Link to={"/home"}>  Home </Link>
            <Link to={"/cart"}>  cart  ({cart?.length}) </Link>

            {isLogged && <p> 
                {t("welcome-person", {name: username})}
                {/* {t("welcome")} {username} */}
                <button onClick={handleLogout}> Logout! </button>
            </p>}

            <input type="checkbox" checked={isDark} onChange={handleToggleDarkmode}/>
            <LangSelector/>
            
        </div>
    )
}

export default NavBar

