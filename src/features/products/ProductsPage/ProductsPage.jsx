import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../productsApi'
import SingleProduct from '../SingleProduct/SingleProduct'
import "./ProductsPage.css"
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const nav = useNavigate();

    useEffect(() => {
        fetchProducts().then((products_) => {
            setProducts(products_)
        })
    }, [])
    return (
        <div>
            {products?.map((p) => {
                return <p key={p.id} onClick={() => { nav("/product/" + p.id) }} className='p-row'>
                    {p.id} - {p.name}   </p>
            })}
        </div>
    )
}

export default ProductsPage