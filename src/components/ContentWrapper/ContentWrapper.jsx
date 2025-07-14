import React, { useState } from 'react'
import Products from '../Products/Products'
import Home from '../Home/Home'
import "./ContentWrapper.css"
import AddProductPage from '../AddProductPage/AddProductPage'

const ContentWrapper = () => {
    const [whatToShow, setWhatToShow] = useState("home")
  return (    
    <div id='content-wrapper-container'>        
        <div id='links-container'>
            <button onClick={()=>setWhatToShow("home")}> Home </button>
            <button onClick={()=>setWhatToShow("products")}> Products </button>
            <button onClick={()=>alert("not implemented yet!")}> Login </button>
            <button onClick={()=>setWhatToShow("new-product")}> Add Product </button>
        </div>

        <div id='content-container'>
            {(whatToShow === "home") && <Home/>}
            {(whatToShow === "products") && <Products/>}
            {(whatToShow === "new-product") && <AddProductPage setWhatToShow={setWhatToShow}/>}
        </div>

    </div>
  )
}

export default ContentWrapper