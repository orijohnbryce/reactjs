// import React from 'react'
import "./Products.css"

const Products = () => {
    
    // todo : load from BE
    const products = [];

  return (
    <div id='products-container' >
        <h1> Products </h1>
        
        {products.map((p)=><li> {p.name} </li>)}
        
    </div>
  )
}

export default Products