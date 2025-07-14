import React, { useState } from 'react'
import Products from '../Products/Products'
import Home from '../Home/Home'
import "./ContentWrapper.css"

const ContentWrapper = () => {
    const [whatToShow, setWhatToShow] = useState("home")
  return (    
    <div id='content-wrapper-container'>        
        <div id='links-container'>
            <button onClick={()=>setWhatToShow("home")}> Home </button>
            <button onClick={()=>setWhatToShow("products")}> Products </button>
            <button onClick={()=>alert("not implemented yet!")}> Login </button>
        </div>

        <div id='content-container'>
            {(whatToShow === "home") && <Home/>}
            {(whatToShow === "products") && <Products/>}
        </div>

    </div>
  )
}

export default ContentWrapper