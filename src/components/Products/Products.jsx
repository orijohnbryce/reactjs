// import React from 'react'
import { useEffect, useState } from "react"
import "./Products.css"
import { fetchProducts } from "../../api"
import SingleProduct from "../SingleProduct/SingleProduct"

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

    const handleProductClick = (p)=>{        
        
        setSelectedProduct(p);
    }
    console.log(selectedProduct);
    
    const onBackToList = ()=>{
        setSelectedProduct(null);
    }

    if (selectedProduct){
        return <SingleProduct product={selectedProduct} onBackToList={onBackToList} />
    }

    return (
        <div id='products-container' >
            <h1> Products </h1>
            <ul>
                {products.map((p) => 
                <li onClick={() => handleProductClick(p)}
                    key={p.id} className="product-li">
                    {p.name}
                </li>)}
            </ul>

        </div>
    )
}

export default Products