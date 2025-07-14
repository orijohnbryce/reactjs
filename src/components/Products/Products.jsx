// import React from 'react'
import { useEffect, useState } from "react"
import "./Products.css"
import { fetchProducts } from "../../api"

const Products = () => {

    const [products, setProducts] = useState([])

    const [selectedProduct, setSelectedProduct] = useState(null);
    
    useEffect(() => {
        fetchProducts().then((res) => {
            setProducts(res.data);
        }).catch((e) => {
            console.log(e);
            alert("Some error")
        })
    }, [])

    return (
        <div id='products-container' >
            <h1> Products </h1>
            <ul>
                {products.map((p) => <li> {p.name} </li>)}
            </ul>

        </div>
    )
}

export default Products